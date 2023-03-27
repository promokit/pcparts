import { PipelineStage, PopulateOptions } from 'mongoose';
import { CaseModel as Model, CaseInterface as Items } from '../models';
import { QueryGetCaseByArgs as Args } from '../graphql/generated';
import { makeAggregation } from '../utils/mongoose';
import config from '../config';

const lookups: PipelineStage.Lookup[] = [
    {
        $lookup: {
            from: 'motherboards',
            localField: 'form_factor',
            foreignField: 'form_factor',
            as: 'relatedMotherboards',
        },
    },
];

const populations: PopulateOptions = {
    path: 'brand form_factor',
    select: 'name _id',
};

const getCases = async (args: Args): Promise<Items[]> => {
    const props = {
        args: {
            ...args,
            limit: args.limit || config.db.requests.limit,
        },
        lookups,
        populations,
    };
    return await makeAggregation<Items, Args>(Model, props);
};

export { getCases };
