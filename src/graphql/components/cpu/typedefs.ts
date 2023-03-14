import gql from 'graphql-tag';

export default gql`
    type Cpu {
        _id: ID
        model: String
        brand: BasicInstance
        socket: BasicInstance
        graphics: BasicInstance
        ram_type: BasicInstance
        ram_speed: BasicInstance
        tdp: Int
        ram_max: Int
        core_clock: Int
        core_count: Int
        smt: Boolean
    }

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
