import { QueryGetCpuByArgs as Args } from '../../generated';
import { CpuInterface as Items } from '../../../models';
import { getCpus } from '../../../services';

export default {
    Query: {
        getCpuBy: async (_: any, args: Args): Promise<Items[]> => {
            return await getCpus(args);
        },
    },
};
