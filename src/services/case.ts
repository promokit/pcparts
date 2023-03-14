import config from '../config';
import { QueryGetCaseByArgs as Args } from '../graphql/generated';
import { CaseModel as Model, CaseInterface as Items } from '../models';

const getCases = async (args: Args): Promise<Items[]> => {
    let { limit, ...filter } = args;
    limit = limit || config.db.requests.limit;

    const params = {
        path: 'brand form_factor',
        select: 'name _id',
    };

    return await Model.find(filter).limit(limit).populate(params);
};

export { getCases };
