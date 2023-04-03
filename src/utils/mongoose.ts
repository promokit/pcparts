import { AggregationProps } from '../interfaces/MongooseInterface';
import { Model, Document, PipelineStage } from 'mongoose';
import config from '../config';

export const getPipeline = <T>(props: AggregationProps<T>): PipelineStage[] => {
    const { limit = config.db.requests.limit, ...filter } = props.args;
    const stages: PipelineStage.Match[] = Object.entries(filter).map(
        (param) => ({
            $match: {
                $expr: {
                    $eq: [`$${param[0]}`, { $toObjectId: param[1] }],
                },
            },
        })
    );
    const lookups = props.lookups || [];
    const limits = { $limit: limit };

    return [...stages, ...lookups, limits];
};

export const makeAggregation = async <T extends Document, U>(
    model: Model<T>,
    props: AggregationProps<U>
) => {
    const pipeline = getPipeline<U>(props);
    const aggregation = await model.aggregate(pipeline);

    return props.populations
        ? await model.populate(aggregation, props.populations)
        : aggregation;
};
