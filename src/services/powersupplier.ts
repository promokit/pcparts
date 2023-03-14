import config from '../config';
import { QueryGetPowerSupplierByArgs as Args } from '../graphql/generated';
import {
    PowerSupplierModel as Model,
    PowerSupplierInterface as Items,
} from '../models';

const getPowerSuppliers = async (args: Args): Promise<Items[]> => {
    let { limit, ...filter } = args;
    limit = limit || config.db.requests.limit;

    const params = {
        path: 'brand form_factor',
        select: 'name _id',
    };

    return await Model.find(filter).limit(limit).populate(params);
};

export { getPowerSuppliers };
