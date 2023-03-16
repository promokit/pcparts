import { QueryGetStorageByArgs as Args } from '../../generated';
import { StorageInterface as Items } from '../../../models';
import { getStorages } from '../../../services';

export default {
    Query: {
        getStorageBy: async (_: any, args: Args): Promise<Items[]> => {
            return await getStorages(args);
        },
    },
};
