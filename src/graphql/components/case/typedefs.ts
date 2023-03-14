import gql from 'graphql-tag';

export default gql`
    type Case {
        _id: ID
        model: String
        brand: BasicInstance
        form_factor: BasicInstance
    }

    extend type Query {
        getCaseBy(limit: Int, _id: ID, brand: ID, form_factor: ID): [Case]
    }
`;
