import { GraphQLObjectType, GraphQLString } from 'graphql';
import BasicType from './basic';

const PowerSupplier: GraphQLObjectType = new GraphQLObjectType({
    name: 'PowerSupplier',
    fields: {
        _id: {
            type: GraphQLString,
        },
        model: {
            type: GraphQLString,
        },
        brand: {
            type: BasicType,
            resolve: ({ brand }) => brand,
        },
        form_factor: {
            type: BasicType,
            resolve: ({ form_factor }) => form_factor,
        },
    },
});

export default PowerSupplier;
