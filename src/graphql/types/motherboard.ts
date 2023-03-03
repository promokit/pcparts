import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import BasicType from './basic';

const Motherboard: GraphQLObjectType = new GraphQLObjectType({
    name: 'Motherboard',
    fields: {
        _id: {
            type: GraphQLString,
        },
        model: {
            type: GraphQLString,
        },
        ram_slots: {
            type: GraphQLInt,
        },
        brand: {
            type: BasicType,
            resolve: ({ brand }) => brand,
        },
        graphics_bus: {
            type: BasicType,
            resolve: ({ graphics_bus }) => graphics_bus,
        },
        form_factor: {
            type: BasicType,
            resolve: ({ form_factor }) => form_factor,
        },
        socket: {
            type: BasicType,
            resolve: ({ socket }) => socket,
        },
        chipset: {
            type: BasicType,
            resolve: ({ chipset }) => chipset,
        },
    },
});

export default Motherboard;
