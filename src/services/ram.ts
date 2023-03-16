import config from '../config';
import { QueryGetRamByArgs as Args } from '../graphql/generated';
import { RamModel as Model, RamInterface as Items } from '../models';

const getRam = async (args: Args): Promise<Items[]> => {
    let { limit, ...filter } = args;
    limit = limit || config.db.requests.limit;

    const params = {
        path: 'brand type speed',
        select: 'name speed _id',
    };

    return await Model.find(filter).limit(limit).populate(params);
};

export { getRam };
