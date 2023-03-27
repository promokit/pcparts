import { PopulateOptions } from 'mongoose';
import { StorageModel as Model, StorageInterface as Items } from '../models';
import { QueryGetRamByArgs as Args } from '../graphql/generated';
import { makeAggregation } from '../utils/mongoose';
import config from '../config';

const populations: PopulateOptions = {
    path: 'brand type form_factor port',
    select: 'name _id',
};

const getStorages = async (args: Args): Promise<Items[]> => {
    const props = {
        args: {
            ...args,
            limit: args.limit || config.db.requests.limit,
        },
        populations,
    };
    return await makeAggregation<Items, Args>(Model, props);
};

export { getStorages };
