import { RamInterface } from '../interfaces';
import { Ram } from '../models';
import config from '../config';

const getRam = async (
    limit: number = config.db.requests.limit
): Promise<RamInterface[]> => {
    const filter = {};
    const params = {
        path: 'brand type speed',
        select: 'name speed -_id',
    };
    return await Ram.find(filter).limit(limit).populate(params);
};

export { getRam };
