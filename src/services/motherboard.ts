import { PipelineStage, PopulateOptions } from 'mongoose';
import { QueryGetMotherboardsByArgs as Args } from '../graphql/generated';
import { makeAggregation } from '../utils/mongoose';
import {
    MotherboardInterface as Items,
    MotherboardModel as Model,
} from '../models';
import config from '../config';

const lookups: PipelineStage.Lookup[] = [
    {
        $lookup: {
            from: 'cpus',
            localField: 'socket',
            foreignField: 'socket',
            as: 'relatedCpus',
        },
    },
    {
        $lookup: {
            from: 'graphics',
            localField: 'graphics_bus',
            foreignField: 'graphics_bus',
            as: 'relatedGraphics',
        },
    },
    {
        $lookup: {
            from: 'rams',
            localField: 'ram_slots',
            foreignField: 'modules',
            as: 'relatedRam',
        },
    },
    {
        $lookup: {
            from: 'cases',
            localField: 'form_factor',
            foreignField: 'form_factor',
            as: 'relatedCases',
        },
    },
    {
        $lookup: {
            from: 'powersuppliers',
            localField: 'form_factor',
            foreignField: 'form_factor',
            as: 'relatedPowerSuppliers',
        },
    },
    {
        $lookup: {
            from: 'storages',
            localField: 'storage_port',
            foreignField: 'storage_port',
            as: 'relatedStorage',
        },
    },
];

const populations: PopulateOptions = {
    path: 'brand socket chipset form_factor graphics_bus storage_port',
    select: 'name _id',
};

const getMotherboards = async (args: Args): Promise<Items[]> => {
    const props = {
        args: {
            ...args,
            limit: args.limit || config.db.requests.limit,
        },
        lookups,
        populations,
    };
    return await makeAggregation<Items, Args>(Model, props);
};

export { getMotherboards };
