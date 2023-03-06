import {
    GraphQLBoolean,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
} from 'graphql';

const Cpu: GraphQLObjectType = new GraphQLObjectType({
    name: 'Cpu',
    fields: {
        model: { type: GraphQLString },
        core_clock: { type: GraphQLFloat },
        core_count: { type: GraphQLInt },
        ram_max: { type: GraphQLInt },
        smt: { type: GraphQLBoolean },
        tdp: { type: GraphQLInt },
        brand: {
            type: GraphQLString,
            resolve: ({ brand }) => brand.name,
        },
        graphics: {
            type: GraphQLString,
            resolve: ({ graphics }) => graphics && graphics.name,
        },
        socket: {
            type: GraphQLString,
            resolve: ({ socket }) => socket.name,
        },
        ram_type: {
            type: GraphQLString,
            resolve: ({ ram_type }) => ram_type.name,
        },
        ram_speed: {
            type: GraphQLInt,
            resolve: ({ ram_speed }) => ram_speed && ram_speed.speed,
        },
    },
});

export default Cpu;
