import config from '../config';
import { QueryGetGraphicByArgs as Args } from '../graphql/generated';
import { GraphicModel as Model, GraphicInterface as Items } from '../models';

const getGraphics = async (args: Args): Promise<Items[]> => {
    let { limit, ...filter } = args;
    limit = limit || config.db.requests.limit;

    const params = {
        path: 'brand graphics_bus',
        select: 'name _id',
    };

    return await Model.find(filter).limit(limit).populate(params);
};

export { getGraphics };
