import gql from 'graphql-tag';

const typeDefs = gql`
    type Motherboards {
        _id: ID
        model: String
        ram_slots: Int
        brand: BasicInstance
        socket: BasicInstance
        chipset: BasicInstance
        form_factor: BasicInstance
        graphics_bus: BasicInstance
    }

    extend type Query {
        getMotherboardsBy(
            limit: Int
            _id: ID
            brand: ID
            socket: ID
            chipset: ID
            form_factor: ID
            graphics_bus: ID
        ): [Motherboards]
    }
`;

export default typeDefs;
