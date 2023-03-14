import { QueryGetCaseByArgs as Args } from '../../generated';
import { CaseInterface as Items } from '../../../models';
import { getCases } from '../../../services';

export default {
    Query: {
        getCaseBy: async (_: any, args: Args): Promise<Items[]> => {
            return await getCases(args);
        },
    },
};
