import gql from 'graphql-tag';

export default gql`
    type Graphic {
        _id: ID
        model: String
        brand: BasicInstance
        graphics_bus: BasicInstance
        memory_capacity: Int
        clock_speed: Int
        boost_clock: Int
        length: String
        chipset: String
    }

    extend type Query {
        getGraphicBy(
            limit: Int
            _id: ID
            brand: ID
            graphics_bus: ID
        ): [Graphic]
    }
`;
