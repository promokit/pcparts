import { PipelineStage, PopulateOptions } from 'mongoose';

export interface AggregationLimit {
    limit: number;
}

export interface AggregationProps<T> {
    args: T & AggregationLimit;
    lookups?: PipelineStage.Lookup[];
    populations?: PopulateOptions;
}
