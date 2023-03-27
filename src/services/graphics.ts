import { PipelineStage, PopulateOptions } from 'mongoose';
import { GraphicModel as Model, GraphicInterface as Items } from '../models';
import { QueryGetGraphicByArgs as Args } from '../graphql/generated';
import { makeAggregation } from '../utils/mongoose';
import config from '../config';

const lookups: PipelineStage.Lookup[] = [
    {
        $lookup: {
            from: 'motherboards',
            localField: 'graphics_bus',
            foreignField: 'graphics_bus',
            as: 'relatedMotherboards',
        },
    },
];

const populations: PopulateOptions = {
    path: 'brand graphics_bus',
    select: 'name _id',
};

const getGraphics = async (args: Args): Promise<Items[]> => {
    const props = {
        args: {
            ...args,
            limit: args.limit || config.db.requests.limit,
        },
        lookups,
        populations,
    };
    return await makeAggregation<Items, Args>(Model, props);
};

export { getGraphics };
