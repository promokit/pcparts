import config from '../config';
import { PowerSupplier } from '../models';
import {
    PowerSupplierArgsInterface as Args,
    PowerSupplierInterface as Items,
} from '../interfaces';

const getPowerSuppliers = async (args: Args): Promise<Items[]> => {
    const { limit = config.db.requests.limit, ...filter } = args;
    const params = {
        path: 'brand form_factor',
        select: 'name _id',
    };

    return await PowerSupplier.find(filter).limit(limit).populate(params);
};

export { getPowerSuppliers };
