import fs from 'fs';
import mongoose, { Error } from 'mongoose';

import config from '../config';
import ApiError from '../abstractions/ApiError';
import { StatusCodes } from '../models/enums/status_codes';
import {
    Brand,
    Socket,
    RamType,
    RamSpeed,
    CpuGraphic,
    GraphicBus,
    FormFactor,
    StoragePort,
    StorageType,
    CpuModel as Cpu,
    RamModel as Ram,
    CaseModel as Case,
    GraphicModel as Graphic,
    ChipsetModel as Chipset,
    StorageModel as Storage,
    MotherboardModel as Motherboard,
    PowerSupplierModel as PowerSupplier,
    StorageFormFactor,
} from '../models';

interface FilesSet {
    file: string;
}

// FIXME: fix any type
interface CollectionSet extends FilesSet {
    model: any;
}

if (!config.databaseURL) {
    throw new Error('Database link is not provided');
}

const readFile = (file: string) => {
    try {
        const json = JSON.parse(
            fs.readFileSync(`${process.cwd()}/db/seeds/${file}.json`, 'utf-8')
        );
        return json;
    } catch (_) {
        return false;
    }
};

const collectionsMap: CollectionSet[] = [
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

const findModel = (collection: string): CollectionSet | undefined => {
    return collectionsMap.find(({ file }: FilesSet) => file === collection);
};

const seedData = async (collection: string | null) => {
    const seedOne = async (sourceFile: string) => {
        const seed = findModel(sourceFile);

        if (!seed) {
            return console.log(`🟡 "${collection}" does not exist!`);
        }

        const data = readFile(sourceFile);

        if (!data) {
            return console.log(`🟡 "${collection}" data is corrupted!`);
        }

        const response = await seed.model.create(data);

        console.log(
            response
                ? `🟢 "${collection}" data successfully seeded`
                : '🔴 Unable to seed data!'
        );
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

        console.log(`🟢 All data successfully seeded`);
    };

    collection ? await seedOne(collection) : await seedAll();
};

const deleteData = async (collection: string | null) => {
    const deleteOne = async (collection: string) => {
        const seed = findModel(collection);

        if (!seed) {
            return console.log(`🟡 "${collection}" does not exist!`);
        }

        const { acknowledged, deletedCount } = await seed.model.deleteMany({});

        console.log(
            acknowledged
                ? `🟢 ${deletedCount} rows successfully deleted`
                : '🔴 Unable to delete data!'
        );
    };

    const deleteAll = async () => {
        await Promise.all(
            collectionsMap.map(async ({ model }) => {
                await model.deleteMany({});
            })
        );

        console.log(`🟢 All data successfully deleted`);
    };

    collection ? await deleteOne(collection) : await deleteAll();
};

(async function () {
    if (!config.databaseURL) {
        return console.error('🔴 Database link is not provided!');
    }

    try {
        await mongoose.connect(config.databaseURL);
        console.info('🟢 Connection with DB is established');
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
