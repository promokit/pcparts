import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const Graphic: GraphQLObjectType = new GraphQLObjectType({
    name: 'Graphic',
    fields: {
        model: { type: GraphQLString },
        chipset: { type: GraphQLString },
        memory_capacity: { type: GraphQLInt },
        clock_speed: { type: GraphQLInt },
        boost_clock: { type: GraphQLInt },
        length: { type: GraphQLString },
        brand: {
            type: GraphQLString,
            resolve: ({ brand }) => brand.name,
        },
        graphics_bus: {
            type: GraphQLString,
            resolve: ({ graphics_bus }) => graphics_bus.name,
        },
    },
});

export default Graphic;
