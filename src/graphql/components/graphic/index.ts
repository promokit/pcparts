import compileComponent from '../../../utils/graphql_compiler';
import resolvers from './resolvers';
import typeDefs from './typedefs';

export default compileComponent(typeDefs, resolvers);
