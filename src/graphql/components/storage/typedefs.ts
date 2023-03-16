import gql from 'graphql-tag';

export default gql`
    type Storage {
        _id: ID
        model: String
        brand: BasicInstance
        type: BasicInstance
        port: BasicInstance
        form_factor: BasicInstance
        capacity: Int
        cache: Int
    }

    extend type Query {
        getStorageBy(
            limit: Int
            _id: ID
            brand: ID
            type: ID
            port: ID
            form_factor: ID
        ): [Storage]
    }
`;
