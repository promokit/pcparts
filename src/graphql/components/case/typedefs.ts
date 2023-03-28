import gql from 'graphql-tag';

export default gql`
    extend type Query {
        getCaseBy(limit: Int, _id: ID, brand: ID, form_factor: ID): [Case]
    }
`;
