import { QueryGetRamByArgs as Args } from '../../generated';
import { RamInterface as Items } from '../../../models';
import { getRam } from '../../../services';

export default {
    Query: {
        getRamBy: async (_: any, args: Args): Promise<Items[]> => {
            return await getRam(args);
        },
    },
};
