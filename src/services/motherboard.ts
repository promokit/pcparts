import { MotherboardInterface } from '../interfaces';
import { Motherboard } from '../models';
import config from '../config';

const getMotherboards = async (
    limit: number = config.db.requests.limit
): Promise<MotherboardInterface[]> => {
    const filter = {};
    const params = {
        path: 'brand socket chipset form_factor graphics_bus',
        select: 'name -_id',
    };
    return await Motherboard.find(filter).limit(limit).populate(params);
};

export { getMotherboards };
