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

const limit = 2;

const mockProps = {
    args: {
        limit,
        brand: '63e4b423fa998a018052c7d7',
    },
};

enum MODELS {
    MODEL1 = 'MODEL1',
    MODEL2 = 'MODEL2',
}

const mockArgs = [
    { _id: '1', model: MODELS.MODEL1 },
    { _id: '2', model: MODELS.MODEL2 },
];

describe('mongoose queries', () => {
    afterEach(() => mockingoose.resetAll());

    describe('getPipeline', () => {
        it('return an array with one match stage when passed one filter parameter', () => {
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

        it('return only the limit argument if nothing else was passed.', () => {
            const expectedOutput = [{ $limit: 1 }];

            const results = getPipeline({ args: { limit: 1 } });

            expect(results).toEqual(expectedOutput);
        });
    });

    describe('getRam', () => {
        it('should return RAM models', async () => {
            mockingoose(RamModel).toReturn(mockArgs, 'aggregate');

            const result = await getRam({ limit });

            expect(result).toHaveLength(limit);
            expect(result[0].model).toBe(MODELS.MODEL1);
            expect(result[1].model).toBe(MODELS.MODEL2);
        });

        it('should return requested RAM item by ID', async () => {
            mockingoose(RamModel).toReturn([mockArgs[1]], 'aggregate');

            const result = await getRam({ _id: '2' });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe(MODELS.MODEL2);
        });
    });

    describe('getCpus', () => {
        it('should return CPU models', async () => {
            mockingoose(CpuModel).toReturn(mockArgs, 'aggregate');

            const result = await getCpus({ limit });

            expect(result).toHaveLength(limit);
            expect(result[0].model).toBe(MODELS.MODEL1);
            expect(result[1].model).toBe(MODELS.MODEL2);
        });

        it('should return requested CPU item by ID', async () => {
            mockingoose(CpuModel).toReturn([mockArgs[1]], 'aggregate');

            const result = await getCpus({ _id: '2' });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe(MODELS.MODEL2);
        });
    });

    describe('getCases', () => {
        it('should return Cases models', async () => {
            mockingoose(CaseModel).toReturn(mockArgs, 'aggregate');
            const result = await getCases({ limit });

            expect(result).toHaveLength(limit);
            expect(result[0].model).toBe(MODELS.MODEL1);
            expect(result[1].model).toBe(MODELS.MODEL2);
        });

        it('should return requested Case item by ID', async () => {
            mockingoose(CaseModel).toReturn([mockArgs[1]], 'aggregate');

            const result = await getCases({ _id: '2' });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe(MODELS.MODEL2);
        });
    });

    describe('getGraphics', () => {
        it('should return Graphics models', async () => {
            mockingoose(GraphicModel).toReturn(mockArgs, 'aggregate');

            const result = await getGraphics({ limit });

            expect(result).toHaveLength(limit);
            expect(result[0].model).toBe(MODELS.MODEL1);
            expect(result[1].model).toBe(MODELS.MODEL2);
        });

        it('should return requested Graphic item by ID', async () => {
            mockingoose(GraphicModel).toReturn([mockArgs[1]], 'aggregate');

            const result = await getGraphics({ _id: '2' });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe(MODELS.MODEL2);
        });
    });

    describe('getStorages', () => {
        it('should return Storages models', async () => {
            mockingoose(StorageModel).toReturn(mockArgs, 'aggregate');

            const result = await getStorages({ limit });

            expect(result).toHaveLength(limit);
            expect(result[0].model).toBe(MODELS.MODEL1);
            expect(result[1].model).toBe(MODELS.MODEL2);
        });

        it('should return requested Storage item by ID', async () => {
            mockingoose(StorageModel).toReturn([mockArgs[1]], 'aggregate');

            const result = await getStorages({ _id: '2' });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe(MODELS.MODEL2);
        });
    });

    describe('getMotherboards', () => {
        it('should return Motherboards models', async () => {
            mockingoose(MotherboardModel).toReturn(mockArgs, 'aggregate');

            const result = await getMotherboards({ limit });

            expect(result).toHaveLength(limit);
            expect(result[0].model).toBe(MODELS.MODEL1);
            expect(result[1].model).toBe(MODELS.MODEL2);
        });

        it('should return requested Motherboard item by ID', async () => {
            mockingoose(MotherboardModel).toReturn([mockArgs[1]], 'aggregate');

            const result = await getMotherboards({ _id: '2' });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe(MODELS.MODEL2);
        });
    });

    describe('getPowersuppliers', () => {
        it('should return Power Suppliers models', async () => {
            mockingoose(PowerSupplierModel).toReturn(mockArgs, 'aggregate');

            const result = await getPowerSuppliers({ limit });

            expect(result).toHaveLength(limit);
            expect(result[0].model).toBe(MODELS.MODEL1);
            expect(result[1].model).toBe(MODELS.MODEL2);
        });

        it('should return requested Power Supplier item by ID', async () => {
            mockingoose(PowerSupplierModel).toReturn(
                [mockArgs[1]],
                'aggregate'
            );

            const result = await getPowerSuppliers({ _id: '2' });
            expect(result).toHaveLength(1);
            expect(result[0].model).toBe(MODELS.MODEL2);
        });
    });
});
