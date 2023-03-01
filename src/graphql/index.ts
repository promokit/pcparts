import { GraphQLSchema } from 'graphql';

import RootQuery from './queries/root_query';
import RootMutation from './mutations/root_mutation';

const scheema = { query: RootQuery, mutation: RootMutation };

export default new GraphQLSchema(scheema);
