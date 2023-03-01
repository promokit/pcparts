import { CaseInterface } from '../interfaces';
import { Case } from '../models';
import config from '../config';

const getCases = async (
    limit: number = config.db.requests.limit
): Promise<CaseInterface[]> => {
    const filter = {};
    const params = {
        path: 'brand form_factor',
        select: 'name -_id',
    };
    return await Case.find(filter).limit(limit).populate(params);
};

export { getCases };
