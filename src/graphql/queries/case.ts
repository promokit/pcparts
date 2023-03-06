import {
    GraphQLFieldConfig,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';
import Case from '../types/case';
import { getCases } from '../../services';
import { CaseArgsInterface } from '../../interfaces';

// FIXME: create and pass app context here
const getCasesBy: GraphQLFieldConfig<unknown, unknown> = {
    description: 'Returns a list of Cases',
    type: new GraphQLList(Case),
    args: {
        _id: { type: GraphQLString },
        limit: { type: GraphQLInt },
        brand: { type: GraphQLString },
        form_factor: { type: GraphQLString },
    },
    resolve: async (_, args: CaseArgsInterface) => {
        return await getCases(args);
    },
};

export default getCasesBy;
