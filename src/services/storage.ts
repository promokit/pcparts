import config from '../config';
import { QueryGetRamByArgs as Args } from '../graphql/generated';
import { StorageModel as Model, StorageInterface as Items } from '../models';

const getStorages = async (args: Args): Promise<Items[]> => {
    let { limit, ...filter } = args;
    limit = limit || config.db.requests.limit;

    const params = {
        path: 'brand type form_factor port',
        select: 'name _id',
    };

    return await Model.find(filter).limit(limit).populate(params);
};

export { getStorages };
