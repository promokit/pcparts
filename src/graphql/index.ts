import {
    GraphQLInt,
    GraphQLList,
    GraphQLObjectType,
    GraphQLSchema,
} from 'graphql';

import {
    getCpus,
    getRam,
    getCases,
    getStorages,
    getGraphics,
    getMotherboards,
    getPowerSuppliers,
} from '../services';

import Cpu from './schema/cpu';
import Ram from './schema/ram';
import Case from './schema/case';
import Storage from './schema/storage';
import Graphic from './schema/graphic';
import Motherboard from './schema/motherboard';
import PowerSupplier from './schema/powersupplier';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        motherboard: {
            type: new GraphQLList(Motherboard),
            args: { limit: { type: GraphQLInt } },
            async resolve(_, args) {
                return await getMotherboards(args.limit);
            },
        },
        cpu: {
            type: new GraphQLList(Cpu),
            args: { limit: { type: GraphQLInt } },
            async resolve(_, args) {
                return await getCpus(args.limit);
            },
        },
        ram: {
            type: new GraphQLList(Ram),
            args: { limit: { type: GraphQLInt } },
            async resolve(_, args) {
                return await getRam(args.limit);
            },
        },
        storage: {
            type: new GraphQLList(Storage),
            args: { limit: { type: GraphQLInt } },
            async resolve(_, args) {
                return await getStorages(args.limit);
            },
        },
        graphic: {
            type: new GraphQLList(Graphic),
            args: { limit: { type: GraphQLInt } },
            async resolve(_, args) {
                return await getGraphics(args.limit);
            },
        },
        powersupplier: {
            type: new GraphQLList(PowerSupplier),
            args: { limit: { type: GraphQLInt } },
            async resolve(_, args) {
                return await getPowerSuppliers(args.limit);
            },
        },
        case: {
            type: new GraphQLList(Case),
            args: { limit: { type: GraphQLInt } },
            async resolve(_, args) {
                return await getCases(args.limit);
            },
        },
    },
});

export default new GraphQLSchema({ query: RootQuery, mutation: null });
