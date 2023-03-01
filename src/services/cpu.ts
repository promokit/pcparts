import { CpuInterface } from '../interfaces';
import { Cpu } from '../models';
import config from '../config';

const getCpus = async (
    limit: number = config.db.requests.limit
): Promise<CpuInterface[]> => {
    const filter = {};
    const params = {
        path: 'graphics brand socket ram_type ram_speed',
        select: 'name speed -_id',
    };
    return await Cpu.find(filter).limit(limit).populate(params);
};

export { getCpus };
