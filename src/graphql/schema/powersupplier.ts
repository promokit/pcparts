import { GraphQLObjectType, GraphQLString } from 'graphql';

const PowerSupplier: GraphQLObjectType = new GraphQLObjectType({
    name: 'PowerSupplier',
    fields: {
        model: { type: GraphQLString },
        brand: {
            type: GraphQLString,
            resolve: ({ brand }) => brand.name,
        },
        form_factor: {
            type: GraphQLString,
            resolve: ({ form_factor }) => form_factor.name,
        },
    },
});

export default PowerSupplier;
