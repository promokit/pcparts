import { GraphicInterface } from '../interfaces';
import { Graphic } from '../models';
import config from '../config';

const getGraphics = async (
    limit: number = config.db.requests.limit
): Promise<GraphicInterface[]> => {
    const filter = {};
    const params = {
        path: 'brand graphics_bus',
        select: 'name -_id',
    };
    return await Graphic.find(filter).limit(limit).populate(params);
};

export { getGraphics };
