import { MotherboardArgsInterface } from '../../interfaces';
import { getMotherboards } from '../../services';
import Motherboard from '../types/motherboard';
import {
    GraphQLFieldConfig,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';

// FIXME: create and pass app context here
const getMotherboardsBy: GraphQLFieldConfig<unknown, unknown> = {
    description: 'Returns a list of motherboards',
    type: new GraphQLList(Motherboard),
    args: {
        limit: { type: GraphQLInt },
        id: { type: GraphQLString },
        brand: { type: GraphQLString },
        socket: { type: GraphQLString },
        chipset: { type: GraphQLString },
        graphic_bus: { type: GraphQLString },
        form_factor: { type: GraphQLString },
    },
    resolve: async (_, args: MotherboardArgsInterface) => {
        return await getMotherboards(args);
    },
};

export default getMotherboardsBy;
