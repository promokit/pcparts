import { QueryGetMotherboardsByArgs as Args } from '../../generated';
import { MotherboardInterface as Items } from '../../../models';
import { getMotherboards } from '../../../services';

export default {
    Query: {
        getMotherboardsBy: async (_: any, args: Args): Promise<Items[]> => {
            return await getMotherboards(args);
        },
    },
};
