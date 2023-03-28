import { QueryGetPowerSupplierByArgs as Args } from '../../generated';
import { PowerSupplierInterface as Items } from '../../../models';
import { getPowerSuppliers } from '../../../services';

export default {
    Query: {
        getPowerSupplierBy: async (_: any, args: Args): Promise<Items[]> => {
            return await getPowerSuppliers(args);
        },
    },
};
