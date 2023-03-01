import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const Motherboard: GraphQLObjectType = new GraphQLObjectType({
    name: 'Motherboard',
    fields: {
        model: { type: GraphQLString },
        ram_slots: { type: GraphQLInt },
        brand: {
            type: GraphQLString,
            resolve: ({ brand }) => brand.name,
        },
        graphics_bus: {
            type: GraphQLString,
            resolve: ({ graphics_bus }) => graphics_bus.name,
        },
        form_factor: {
            type: GraphQLString,
            resolve: ({ form_factor }) => form_factor.name,
        },
        socket: {
            type: GraphQLString,
            resolve: ({ socket }) => socket.name,
        },
        chipset: {
            type: GraphQLString,
            resolve: ({ chipset }) => chipset.name,
        },
    },
});

export default Motherboard;
