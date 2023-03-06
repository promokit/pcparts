import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import BasicType from './basic';

const Graphic: GraphQLObjectType = new GraphQLObjectType({
    name: 'Graphic',
    fields: {
        _id: {
            type: GraphQLString,
        },
        model: {
            type: GraphQLString,
        },
        chipset: {
            type: GraphQLString,
        },
        memory_capacity: {
            type: GraphQLInt,
        },
        clock_speed: {
            type: GraphQLInt,
        },
        boost_clock: {
            type: GraphQLInt,
        },
        length: {
            type: GraphQLString,
        },
        brand: {
            type: BasicType,
            resolve: ({ brand }) => brand,
        },
        graphics_bus: {
            type: BasicType,
            resolve: ({ graphics_bus }) => graphics_bus,
        },
    },
});

export default Graphic;
