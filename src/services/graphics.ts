import config from '../config';
import { Graphic } from '../models';
import {
    GraphicInterface as Items,
    GraphicArgsInterface as Args,
} from '../interfaces';

const getGraphics = async (args: Args): Promise<Items[]> => {
    const { limit = config.db.requests.limit, ...filter } = args;
    const params = {
        path: 'brand graphics_bus',
        select: 'name _id',
    };

    return await Graphic.find(filter).limit(limit).populate(params);
};

export { getGraphics };
