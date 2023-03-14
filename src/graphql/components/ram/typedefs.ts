import gql from 'graphql-tag';

export default gql`
    type Ram {
        _id: ID
        model: String
        type: BasicInstance
        brand: BasicInstance
        speed: BasicInstance
        modules: Int
        first_word_latency: String
        cas_latency: Int
        capacity: Int
    }

    extend type Query {
        getRamBy(limit: Int, _id: ID, brand: ID, type: ID, speed: ID): [Ram]
    }
`;
