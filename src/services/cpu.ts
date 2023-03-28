import { PipelineStage, PopulateOptions } from 'mongoose';
import { CpuModel as Model, CpuInterface as Items } from '../models';
import { QueryGetCpuByArgs as Args } from '../graphql/generated';
import { makeAggregation } from '../utils/mongoose';
import config from '../config';

const lookups: PipelineStage.Lookup[] = [
    {
        $lookup: {
            from: 'motherboards',
            localField: 'socket',
            foreignField: 'socket',
            as: 'relatedMotherboards',
        },
    },
    {
        $lookup: {
            from: 'rams',
            localField: 'ram_speed',
            foreignField: 'speed',
            as: 'relatedRam',
        },
    },
];

const populations: PopulateOptions = {
    path: 'graphics brand socket ram_type ram_speed',
    select: 'name speed _id',
};

const getCpus = async (args: Args): Promise<Items[]> => {
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

export { getCpus };
