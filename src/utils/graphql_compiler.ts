import { DocumentNode } from 'graphql';
import { ResolversParentTypes } from '../graphql/generated';
import { GqlComponentInterface } from '../graphql/components/root';

const compileComponent = (
    typeDefs: DocumentNode,
    resolvers: ResolversParentTypes['Query']
): GqlComponentInterface => ({
    typeDefs,
    resolvers,
});

export default compileComponent;
