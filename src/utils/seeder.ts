import fs from 'fs';
import mongoose from 'mongoose';

import config from '../config';
import ApiError from '../abstractions/ApiError';
import { StatusCodes } from '../models/enums/status_codes';
import {
    Cpu,
    Ram,
    Case,
    Brand,
    Socket,
    Graphic,
    RamType,
    Chipset,
    Storage,
    RamSpeed,
    CpuGraphic,
    GraphicBus,
    FormFactor,
    StoragePort,
    StorageType,
    Motherboard,
    PowerSupplier,
    StorageFormFactor,
} from '../models';

interface FilesSet {
    file: string;
}

interface CollectionSet<T> extends FilesSet {
    model: T;
}

if (!config.databaseURL) {
    throw new Error('Database link is not provided');
}

// the `strictQuery` option will be switched back to `false` by default in Mongoose 7
mongoose.set('strictQuery', false);

const readFile = (file: string) => {
    return JSON.parse(
        fs.readFileSync(`${process.cwd()}/db/seeds/${file}.json`, 'utf-8')
    );
};

// TODO: fix any type
const collectionsMap: CollectionSet<any>[] = [
    { model: Brand, file: 'brands' },
    { model: FormFactor, file: 'formfactors' },
    { model: StorageType, file: 'storagetypes' },
    { model: StoragePort, file: 'storageports' },
    { model: StorageFormFactor, file: 'storageformfactors' },
    { model: GraphicBus, file: 'graphicbuses' },
    { model: RamType, file: 'ramtypes' },
    { model: RamSpeed, file: 'ramspeeds' },
    { model: Socket, file: 'sockets' },
    { model: CpuGraphic, file: 'cpugraphics' },
    { model: Chipset, file: 'chipsets' },
    { model: Graphic, file: 'graphics' },
    { model: PowerSupplier, file: 'powersuppliers' },
    { model: Case, file: 'cases' },
    { model: Ram, file: 'rams' },
    { model: Cpu, file: 'cpus' },
    { model: Storage, file: 'storages' },
    { model: Motherboard, file: 'motherboards' },
];

const seedData = async (collection: string | null) => {
    const seedOne = async (sourceFile: string) => {
        const seed = collectionsMap.find(
            ({ file }: FilesSet) => file === sourceFile
        );
        const data = readFile(sourceFile);
        seed && data && (await seed.model.create(data));
    };

    // need to make initial seed step by step because of some mongodb timeouts
    // TODO: find what mongodb settings to adjust to make all requests in one go
    const seedAll = async () => {
        await Brand.create(readFile('brands'));
        await FormFactor.create(readFile('formfactors'));
        await StorageType.create(readFile('storagetypes'));
        await StoragePort.create(readFile('storageports'));
        await StorageFormFactor.create(readFile('storageformfactors'));
        await GraphicBus.create(readFile('graphicbuses'));
        await RamType.create(readFile('ramtypes'));
        await RamSpeed.create(readFile('ramspeeds'));
        await Socket.create(readFile('sockets'));
        await CpuGraphic.create(readFile('cpugraphics'));
        await Chipset.create(readFile('chipsets'));
        await Graphic.create(readFile('graphics'));
        await PowerSupplier.create(readFile('powersuppliers'));
        await Case.create(readFile('cases'));
        await Ram.create(readFile('rams'));
        await Cpu.create(readFile('cpus'));
        await Storage.create(readFile('storages'));
        await Motherboard.create(readFile('motherboards'));
    };

    collection ? await seedOne(collection) : await seedAll();

    return console.log(`${collection || 'All'} data successfully seeded!`);
};

const deleteData = async (collection: string | null) => {
    const deleteOne = async (collection: string) => {
        const seed = collectionsMap.find(
            ({ file }: FilesSet) => file === collection
        );
        seed && (await seed.model.deleteMany({}));
    };

    const deleteAll = async () =>
        await Promise.all(
            collectionsMap.map(async ({ model }) => {
                await model.deleteMany({});
            })
        );

    collection ? await deleteOne(collection) : await deleteAll();

    return console.log(`${collection || 'All'} data successfully deleted!`);
};

(async function () {
    if (!config.databaseURL) {
        return console.error('Database link is not provided');
    }

    try {
        await mongoose.connect(config.databaseURL);
        console.info('Connection with DB is established');
    } catch (error: any) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error);
    }

    const action = process.argv[2];
    const collection = process.argv[3] || null;

    const isSeed = action === '--seed';
    const isDelete = action === '--delete';

    try {
        isSeed && (await seedData(collection));
        isDelete && (await deleteData(collection));
    } catch (err) {
        console.log(err);
    }

    process.exit();
})();
