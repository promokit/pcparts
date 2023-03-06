import config from '../config';
import { Motherboard } from '../models';
import {
    MotherboardArgsInterface as Args,
    MotherboardInterface as Items,
} from '../interfaces';

const getMotherboards = async (args: Args): Promise<Items[]> => {
    const { limit = config.db.requests.limit, ...filter } = args;
    const params = {
        path: 'brand socket chipset form_factor graphics_bus',
        select: 'name _id',
    };

    return await Motherboard.find(filter).limit(limit).populate(params);
};

export { getMotherboards };
