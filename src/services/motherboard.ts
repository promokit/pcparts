import config from '../config';
import { QueryGetMotherboardsByArgs as Args } from '../graphql/generated';
import {
    MotherboardInterface as Items,
    MotherboardModel as Model,
} from '../models';

const getMotherboards = async (args: Args): Promise<Items[]> => {
    let { limit, ...filter } = args;
    limit = limit || config.db.requests.limit;

    const params = {
        path: 'brand socket chipset form_factor graphics_bus',
        select: 'name _id',
    };

    return await Model.find(filter).limit(limit).populate(params);
};

export { getMotherboards };
