import gql from 'graphql-tag';

export default gql`
    extend type Query {
        getCpuBy(
            limit: Int
            _id: ID
            brand: ID
            socket: ID
            graphics: ID
            ram_type: ID
            ram_speed: ID
        ): [Cpu]
    }
`;
