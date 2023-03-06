import config from '../config';
import { Ram } from '../models';
import { RamArgsInterface as Args, RamInterface as Items } from '../interfaces';

const getRam = async (args: Args): Promise<Items[]> => {
    const { limit = config.db.requests.limit, ...filter } = args;
    const params = {
        path: 'brand type speed',
        select: 'name speed _id',
    };

    return await Ram.find(filter).limit(limit).populate(params);
};

export { getRam };
