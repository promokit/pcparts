import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const SpeedType: GraphQLObjectType = new GraphQLObjectType({
    name: 'SpeedType',
    fields: {
        _id: { type: GraphQLString },
        speed: { type: GraphQLInt },
    },
});

export default SpeedType;
