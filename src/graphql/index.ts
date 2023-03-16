import { DocumentNode } from 'graphql';
import { ApolloServerOptions } from '@apollo/server';

import { ResolversParentTypes } from './generated';
import { GqlApolloConfigInterface, rootTypesDefs } from './components/root';

import ramComponent from './components/ram';
import cpuComponent from './components/cpu';
import caseComponent from './components/case';
import storageComponent from './components/storage';
import graphicComponent from './components/graphic';
import motherboardComponent from './components/motherboard';
import powersupplierComponent from './components/powersupplier';

const typeDefs: DocumentNode[] = [
    rootTypesDefs,
    cpuComponent.typeDefs,
    ramComponent.typeDefs,
    caseComponent.typeDefs,
    graphicComponent.typeDefs,
    storageComponent.typeDefs,
    motherboardComponent.typeDefs,
    powersupplierComponent.typeDefs,
];

const resolvers: ResolversParentTypes['Query'][] = [
    cpuComponent.resolvers,
    ramComponent.resolvers,
    caseComponent.resolvers,
    graphicComponent.resolvers,
    storageComponent.resolvers,
    motherboardComponent.resolvers,
    powersupplierComponent.resolvers,
];

const serverConfig: ApolloServerOptions<GqlApolloConfigInterface> = {
    typeDefs,
    resolvers,
};

export { serverConfig };
