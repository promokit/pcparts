import gql from 'graphql-tag';

export default gql`
    extend type Query {
        getPowerSupplierBy(
            limit: Int
            _id: ID
            brand: ID
            form_factor: ID
        ): [PowerSupplier]
    }
`;
