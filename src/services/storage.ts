import config from '../config';
import { Storage } from '../models';
import {
    StorageArgsInterface as Args,
    StorageInterface as Items,
} from '../interfaces';

const getStorages = async (args: Args): Promise<Items[]> => {
    const { limit = config.db.requests.limit, ...filter } = args;
    const params = {
        path: 'brand type form_factor port',
        select: 'name _id',
    };

    return await Storage.find(filter).limit(limit).populate(params);
};

export { getStorages };
