import gql from 'graphql-tag';

const typeDefs = gql`
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
