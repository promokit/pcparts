import gql from 'graphql-tag';

export default gql`
    type PowerSupplier {
        _id: ID
        model: String
        brand: BasicInstance
        form_factor: BasicInstance
    }

    extend type Query {
        getPowerSupplierBy(
            limit: Int
            _id: ID
            brand: ID
            form_factor: ID
        ): [PowerSupplier]
    }
`;
