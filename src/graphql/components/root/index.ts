import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
import { Query, ResolversParentTypes } from '../../generated';

export interface GqlComponentInterface {
    typeDefs: DocumentNode;
    resolvers: ResolversParentTypes['Query'];
}

export interface GqlApolloConfigInterface {
    typeDefs: DocumentNode[];
    resolvers: Query[];
}

export const rootTypesDefs = gql`
    type Query
    type BasicInstance {
        _id: ID
        name: String
    }
`;
