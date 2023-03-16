import { Schema, model, InferSchemaType } from 'mongoose';

const schema: Schema = new Schema({
    model: {
        type: String,
        required: [true, 'RAM model can not be empty'],
        maxlength: [64, 'RAM model must have less 64 characters'],
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'RAM must have a Brand!'],
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'RamType',
        required: [true, 'RAM must have a Type!'],
    },
    speed: {
        type: Schema.Types.ObjectId,
        ref: 'RamSpeed',
        required: [true, 'RAM must have speed!'],
    },
    modules: {
        type: Number,
        default: 1,
        min: 0,
        max: 99,
    },
    capacity: {
        type: Number,
        required: [true, 'RAM capacity can not be empty'],
        min: 0,
        max: 9999,
    },
    cas_latency: {
        type: Number,
        required: [true, 'RAM cas_latency can not be empty'],
    },
    first_word_latency: {
        type: String,
        required: [true, 'RAM first_word_latency can not be empty'],
    },
});

type schemaType = InferSchemaType<typeof schema>;

interface RamInterface extends schemaType {}

const RamModel = model<RamInterface>('Ram', schema);

export { RamInterface, RamModel };
