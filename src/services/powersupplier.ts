import { PopulateOptions } from 'mongoose';
import { QueryGetPowerSupplierByArgs as Args } from '../graphql/generated';
import {
    PowerSupplierModel as Model,
    PowerSupplierInterface as Items,
} from '../models';
import config from '../config';
import { makeAggregation } from '../utils/mongoose';

const populations: PopulateOptions = {
    path: 'brand form_factor',
    select: 'name _id',
};

const getPowerSuppliers = async (args: Args): Promise<Items[]> => {
    const props = {
        args: {
            ...args,
            limit: args.limit || config.db.requests.limit,
        },
        populations,
    };
    return await makeAggregation<Items, Args>(Model, props);
};

export { getPowerSuppliers };
