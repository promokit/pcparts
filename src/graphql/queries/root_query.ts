import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import getMotherboardsBy from '../resolvers/motherboard';
import {
    getCpus,
    getRam,
    getCases,
    getStorages,
    getGraphics,
    getPowerSuppliers,
} from '../../services';

import Cpu from '../types/cpu';
import Ram from '../types/ram';
import Case from '../types/case';
import Storage from '../types/storage';
import Graphic from '../types/graphic';
import PowerSupplier from '../types/powersupplier';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getMotherboardsBy: getMotherboardsBy,
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

export default RootQuery;
