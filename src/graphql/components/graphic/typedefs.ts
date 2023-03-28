import gql from 'graphql-tag';

export default gql`
    extend type Query {
        getGraphicBy(
            limit: Int
            _id: ID
            brand: ID
            graphics_bus: ID
        ): [Graphic]
    }
`;
