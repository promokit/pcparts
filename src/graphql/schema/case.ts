import { GraphQLObjectType, GraphQLString } from 'graphql';

const Case: GraphQLObjectType = new GraphQLObjectType({
    name: 'Case',
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

export default Case;
