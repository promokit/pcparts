import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
} from 'graphql';
import BasicType from './basic';
import SpeedType from './ram_speed';

const Cpu: GraphQLObjectType = new GraphQLObjectType({
    name: 'Cpu',
    fields: {
        _id: {
            type: GraphQLString,
        },
        model: {
            type: GraphQLString,
        },
        core_clock: {
            type: GraphQLFloat,
        },
        core_count: {
            type: GraphQLInt,
        },
        ram_max: {
            type: GraphQLInt,
        },
        smt: {
            type: GraphQLBoolean,
        },
        tdp: {
            type: GraphQLInt,
        },
        brand: {
            type: BasicType,
            resolve: ({ brand }) => brand,
        },
        graphics: {
            type: BasicType,
            resolve: ({ graphics }) => graphics,
        },
        socket: {
            type: BasicType,
            resolve: ({ socket }) => socket,
        },
        ram_type: {
            type: BasicType,
            resolve: ({ ram_type }) => ram_type,
        },
        ram_speed: {
            type: SpeedType,
            resolve: ({ ram_speed }) => ram_speed,
        },
    },
});

export default Cpu;
