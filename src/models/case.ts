import { Schema, model, InferSchemaType } from 'mongoose';

const schema: Schema = new Schema({
    model: {
        type: String,
        required: [true, 'Case model can not be empty'],
        maxlength: [64, 'Case model must have less 64 characters'],
        unique: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Case must have a Brand!'],
    },
    form_factor: {
        type: Schema.Types.ObjectId,
        ref: 'FormFactor',
        required: [true, 'Case must have a Form Factor!'],
    },
});

type schemaType = InferSchemaType<typeof schema>;

interface CaseInterface extends schemaType {}

const CaseModel = model<CaseInterface>('Case', schema);

export { CaseInterface, CaseModel };
