import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import BasicType from './basic';

const Storage: GraphQLObjectType = new GraphQLObjectType({
    name: 'Storage',
    fields: {
        _id: {
            type: GraphQLString,
        },
        model: {
            type: GraphQLString,
        },
        capacity: {
            type: GraphQLInt,
        },
        cache: {
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
        form_factor: {
            type: BasicType,
            resolve: ({ form_factor }) => form_factor,
        },
        port: {
            type: BasicType,
            resolve: ({ port }) => port,
        },
    },
});

export default Storage;
