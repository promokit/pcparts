import { StorageInterface } from '../interfaces';
import { Storage } from '../models';
import config from '../config';

const getStorages = async (
    limit: number = config.db.requests.limit
): Promise<StorageInterface[]> => {
    const filter = {};
    const params = {
        path: 'brand type form_factor port',
        select: 'name -_id',
    };
    return await Storage.find(filter).limit(limit).populate(params);
};

export { getStorages };
