import config from '../config';
import { Case } from '../models';
import {
    CaseArgsInterface as Args,
    CaseInterface as Items,
} from '../interfaces';

const getCases = async (args: Args): Promise<Items[]> => {
    const { limit = config.db.requests.limit, ...filter } = args;
    const params = {
        path: 'brand form_factor',
        select: 'name _id',
    };

    return await Case.find(filter).limit(limit).populate(params);
};

export { getCases };
