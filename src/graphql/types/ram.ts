import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import SpeedType from './ram_speed';
import BasicType from './basic';

const Ram: GraphQLObjectType = new GraphQLObjectType({
    name: 'Ram',
    fields: {
        _id: {
            type: GraphQLString,
        },
        model: {
            type: GraphQLString,
        },
        first_word_latency: {
            type: GraphQLString,
        },
        cas_latency: {
            type: GraphQLInt,
        },
        capacity: {
            type: GraphQLInt,
        },
        modules: {
            type: GraphQLInt,
        },
        brand: {
            type: BasicType,
            resolve: ({ brand }) => brand,
        },
        type: {
            type: BasicType,
            resolve: ({ type }) => type,
        },
        speed: {
            type: SpeedType,
            resolve: ({ speed }) => speed,
        },
    },
});

export default Ram;
