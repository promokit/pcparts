import { GraphQLSchema } from 'graphql';

import RootQuery from './queries/root_query';
import RootMutation from './mutations/root_mutation';

const schema = { query: RootQuery, mutation: RootMutation };

export default new GraphQLSchema(schema);
