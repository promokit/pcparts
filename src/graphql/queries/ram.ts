import { RamArgsInterface } from '../../interfaces';
import { getRam } from '../../services';
import Ram from '../types/ram';
import {
    GraphQLFieldConfig,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';

// FIXME: create and pass app context here
const getRamBy: GraphQLFieldConfig<unknown, unknown> = {
    description: 'Returns a list of RAM',
    type: new GraphQLList(Ram),
    args: {
        _id: { type: GraphQLString },
        limit: { type: GraphQLInt },
        brand: { type: GraphQLString },
        type: { type: GraphQLString },
        speed: { type: GraphQLString },
    },
    resolve: async (_, args: RamArgsInterface) => {
        return await getRam(args);
    },
};

export default getRamBy;
