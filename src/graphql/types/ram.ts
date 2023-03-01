import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const Ram: GraphQLObjectType = new GraphQLObjectType({
    name: 'Ram',
    fields: {
        model: { type: GraphQLString },
        first_word_latency: { type: GraphQLString },
        cas_latency: { type: GraphQLInt },
        capacity: { type: GraphQLInt },
        modules: { type: GraphQLInt },
        brand: {
            type: GraphQLString,
            resolve: ({ brand }) => brand.name,
        },
        type: {
            type: GraphQLString,
            resolve: ({ type }) => type.name,
        },
        speed: {
            type: GraphQLInt,
            resolve: ({ speed }) => speed && speed.speed,
        },
    },
});

export default Ram;
