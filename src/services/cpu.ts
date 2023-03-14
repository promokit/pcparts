import config from '../config';
import { QueryGetCpuByArgs as Args } from '../graphql/generated';
import { CpuModel as Model, CpuInterface as Items } from '../models';

const getCpus = async (args: Args): Promise<Items[]> => {
    let { limit, ...filter } = args;
    limit = limit || config.db.requests.limit;

    const params = {
        path: 'graphics brand socket ram_type ram_speed',
        select: 'name speed _id',
    };

    return await Model.find(filter).limit(limit).populate(params);
};

export { getCpus };
