import { CpuArgsInterface } from '../../interfaces';
import { getCpus } from '../../services';
import Cpu from '../types/cpu';
import {
    GraphQLFieldConfig,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';

// FIXME: create and pass app context here
const getCpusBy: GraphQLFieldConfig<unknown, unknown> = {
    description: 'Returns a list of CPUs',
    type: new GraphQLList(Cpu),
    args: {
        limit: { type: GraphQLInt },
        _id: { type: GraphQLString },
        brand: { type: GraphQLString },
        socket: { type: GraphQLString },
        ram_type: { type: GraphQLString },
        ram_speed: { type: GraphQLString },
    },
    resolve: async (_, args: CpuArgsInterface) => {
        return await getCpus(args);
    },
};

export default getCpusBy;
