import gql from 'graphql-tag';

export default gql`
    extend type Query {
        getRamBy(limit: Int, _id: ID, brand: ID, type: ID, speed: ID): [Ram]
    }
`;
