import {
    GraphQLFieldConfig,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';
import Storage from '../types/cpu';
import { getStorages } from '../../services';
import { StorageArgsInterface } from '../../interfaces';

// FIXME: create and pass app context here
const getStoragesBy: GraphQLFieldConfig<unknown, unknown> = {
    description: 'Returns a list of Storages',
    type: new GraphQLList(Storage),
    args: {
        _id: { type: GraphQLString },
        limit: { type: GraphQLInt },
        brand: { type: GraphQLString },
        type: { type: GraphQLString },
        port: { type: GraphQLString },
        form_factor: { type: GraphQLString },
    },
    resolve: async (_, args: StorageArgsInterface) => {
        return await getStorages(args);
    },
};

export default getStoragesBy;
