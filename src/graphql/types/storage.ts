import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const Storage: GraphQLObjectType = new GraphQLObjectType({
    name: 'Storage',
    fields: {
        model: { type: GraphQLString },
        capacity: { type: GraphQLInt },
        cache: { type: GraphQLInt },
        brand: {
            type: GraphQLString,
            resolve: ({ brand }) => brand.name,
        },
        type: {
            type: GraphQLString,
            resolve: ({ type }) => type.name,
        },
        form_factor: {
            type: GraphQLString,
            resolve: ({ form_factor }) => form_factor.name,
        },
        port: {
            type: GraphQLString,
            resolve: ({ port }) => port.name,
        },
    },
});

export default Storage;
