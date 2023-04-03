const mockingoose = require('mockingoose');
import { getPipeline } from './mongoose';
import {
    CaseModel,
    CpuModel,
    GraphicModel,
    MotherboardModel,
    PowerSupplierModel,
    RamModel,
    StorageModel,
} from '../models';
import {
    getCases,
    getCpus,
    getGraphics,
    getMotherboards,
    getPowerSuppliers,
    getRam,
    getStorages,
} from '../services';

const mockProps = {
    args: {
        limit: 3,
        brand: '63e4b423fa998a018052c7d7',
    },
};

const mockReturn = [
    {
        model: 'Vengeance LPX 16 GB',
    },
];

describe('mongoose queries', () => {
    beforeEach(() => mockingoose.resetAll());

    describe('getPipeline', () => {
        it('returns an array with one match stage when passed one filter parameter', () => {
            const expectedOutput = [
                {
                    $match: {
                        $expr: {
                            $eq: [
                                `$brand`,
                                { $toObjectId: mockProps.args.brand },
                            ],
                        },
                    },
                },
                { $limit: mockProps.args.limit },
            ];

            const results = getPipeline(mockProps);

            expect(results).toEqual(expectedOutput);
        });
    });

    describe('getRam', () => {
        test('returns a list of RAM', async () => {
            mockingoose(RamModel).toReturn(mockReturn, 'aggregate');

            const results = await getRam(mockProps.args);

            expect(results).toEqual(mockReturn);
        });
    });

    describe('getCpus', () => {
        test('returns a list of Cpus', async () => {
            mockingoose(CpuModel).toReturn(mockReturn, 'aggregate');

            const results = await getCpus(mockProps.args);

            expect(results).toEqual(mockReturn);
        });
    });

    describe('getCases', () => {
        test('returns a list of Cases', async () => {
            mockingoose(CaseModel).toReturn(mockReturn, 'aggregate');

            const results = await getCases(mockProps.args);

            expect(results).toEqual(mockReturn);
        });
    });

    describe('getGraphics', () => {
        test('returns a list of Graphics', async () => {
            mockingoose(GraphicModel).toReturn(mockReturn, 'aggregate');

            const results = await getGraphics(mockProps.args);

            expect(results).toEqual(mockReturn);
        });
    });

    describe('getStorages', () => {
        test('returns a list of Storages', async () => {
            mockingoose(StorageModel).toReturn(mockReturn, 'aggregate');

            const results = await getStorages(mockProps.args);

            expect(results).toEqual(mockReturn);
        });
    });

    describe('getMotherboards', () => {
        test('returns a list of Motherboards', async () => {
            mockingoose(MotherboardModel).toReturn(mockReturn, 'aggregate');

            const results = await getMotherboards(mockProps.args);

            expect(results).toEqual(mockReturn);
        });
    });

    describe('getPowersuppliers', () => {
        test('returns a list of Power Suppliers', async () => {
            mockingoose(PowerSupplierModel).toReturn(mockReturn, 'aggregate');

            const results = await getPowerSuppliers(mockProps.args);

            expect(results).toEqual(mockReturn);
        });
    });
});
