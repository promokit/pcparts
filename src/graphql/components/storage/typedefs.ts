import gql from 'graphql-tag';

export default gql`
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
