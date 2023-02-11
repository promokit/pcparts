import fs from 'fs';
import mongoose from 'mongoose';
import {
    Brand,
    Chipset,
    Socket,
    RamType,
    RamSpeed,
    GraphicBus,
    FormFactor,
    StoragePort,
    StorageType,
    StorageFormFactor,
    Case,
    PowerSupplier,
    Storage,
    Ram,
    Graphic,
    CpuGraphic,
    Cpu,
    Motherboard,
} from '../models';
import config from '../config';

if (!config.databaseURL) {
    throw new Error('Database link is not provided');
}

// the `strictQuery` option will be switched back to `false` by default in Mongoose 7
mongoose.set('strictQuery', false);

const seedsPath = `${process.cwd()}/db/seeds/`;
const readFile = (file: string) =>
    JSON.parse(fs.readFileSync(`${seedsPath}/${file}.json`, 'utf-8'));

// READ JSON FILE
const rams = readFile('rams');
const cpus = readFile('cpus');
const cases = readFile('cases');
const brands = readFile('brands');
const sockets = readFile('sockets');
const storages = readFile('storages');
const chipsets = readFile('chipsets');
const ramTypes = readFile('ramtypes');
const ramSpeed = readFile('ramspeeds');
const graphics = readFile('graphics');
const cpugraphics = readFile('cpugraphics');
const graphicBus = readFile('graphicbuses');
const formfactors = readFile('formfactors');
const motherboards = readFile('motherboards');
const storageports = readFile('storageports');
const storagetypess = readFile('storagetypes');
const powersuppliers = readFile('powersuppliers');
const storageformfactors = readFile('storageformfactors');

const seedData = async () => {
    try {
        // await Cpu.create(cpus);
        await Motherboard.create(motherboards);
        // await Ram.create(ram);
        // await Graphic.create(graphics);
        // await CpuGraphic.create(cpugraphics);
        // await Case.create(cases);
        // await Brand.create(brands);
        // await Socket.create(sockets);
        // await Chipset.create(chipsets);
        // await RamType.create(ramTypes);
        // await Storage.create(storages);
        // await RamSpeed.create(ramSpeed);
        // await GraphicBus.create(graphicBus);
        // await FormFactor.create(formfactors);
        // await StoragePort.create(storageports);
        // await StorageType.create(storagetypess);
        // await PowerSupplier.create(powersuppliers);
        // await StorageFormFactor.create(storageformfactors);
        console.log('Data successfully seeded!');
    } catch (err) {
        console.log(err);
    }
};

const deleteData = async () => {
    try {
        // await Brand.deleteMany({});
        // await Case.deleteMany({});
        // await Socket.deleteMany({});
        // await PowerSupplier.deleteMany({});
        // await FormFactor.deleteMany({});
        await Motherboard.deleteMany({});
        console.log('Data successfully deleted!');
    } catch (err) {
        console.log(err);
    }
};

(async function () {
    if (!config.databaseURL) {
        return console.error('Database link is not provided');
    }

    try {
        mongoose.connect(config.databaseURL);
        console.info('Connection with DB is established');
    } catch (error: any) {
        throw new Error(error);
    }

    const action = process.argv[2];
    const isSeed = action === '--seed';
    const isDelete = action === '--delete';

    isSeed && (await seedData());
    isDelete && (await deleteData());

    process.exit();
})();
