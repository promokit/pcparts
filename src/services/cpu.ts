import config from '../config';
import { Cpu } from '../models';
import { CpuArgsInterface as Args, CpuInterface as Items } from '../interfaces';

const getCpus = async (args: Args): Promise<Items[]> => {
    const { limit = config.db.requests.limit, ...filter } = args;
    const params = {
        path: 'graphics brand socket ram_type ram_speed',
        select: 'name speed _id',
    };

    return await Cpu.find(filter).limit(limit).populate(params);
};

export { getCpus };
