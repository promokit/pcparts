import Graphic from '../types/graphic';
import { getGraphics } from '../../services';
import { GraphicArgsInterface } from '../../interfaces';
import {
    GraphQLFieldConfig,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';

// FIXME: create and pass app context here
const getGraphicsBy: GraphQLFieldConfig<unknown, unknown> = {
    description: 'Returns a list of Graphic Cards',
    type: new GraphQLList(Graphic),
    args: {
        _id: { type: GraphQLString },
        limit: { type: GraphQLInt },
        brand: { type: GraphQLString },
        graphics_bus: { type: GraphQLString },
    },
    resolve: async (_, args: GraphicArgsInterface) => {
        return await getGraphics(args);
    },
};

export default getGraphicsBy;
