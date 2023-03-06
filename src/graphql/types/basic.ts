import { GraphQLObjectType, GraphQLString } from 'graphql';

const BasicType: GraphQLObjectType = new GraphQLObjectType({
    name: 'BasicType',
    fields: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
    },
});

export default BasicType;
