import { PipelineStage, PopulateOptions } from 'mongoose';
import { RamModel as Model, RamInterface as Items } from '../models';
import { QueryGetRamByArgs as Args } from '../graphql/generated';
import { makeAggregation } from '../utils/mongoose';
import config from '../config';

const lookups: PipelineStage.Lookup[] = [
    {
        $lookup: {
            from: 'motherboards',
            localField: 'modules',
            foreignField: 'ram_slots',
            as: 'relatedMotherboards',
        },
    },
];

const populations: PopulateOptions = {
    path: 'brand type speed',
    select: 'name speed _id',
};

const getRam = async (args: Args): Promise<Items[]> => {
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

export { getRam };
