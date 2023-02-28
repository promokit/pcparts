import { PowerSupplierInterface } from '../interfaces';
import { PowerSupplier } from '../models';
import config from '../config';

const getPowerSuppliers = async (
    limit: number = config.db.requests.limit
): Promise<PowerSupplierInterface[]> => {
    const filter = {};
    const params = {
        path: 'brand form_factor',
        select: 'name -_id',
    };
    return await PowerSupplier.find(filter).limit(limit).populate(params);
};

export { getPowerSuppliers };
