import { Schema, model } from 'mongoose';
import { ChipsetInterface } from '../interfaces';

const schema: Schema = new Schema<ChipsetInterface>({
    name: {
        type: String,
        required: [true, 'Chipset can not be empty'],
        maxlength: [64, 'Chipset name must have less 64 characters'],
        unique: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Chipset must belong to a Brand!'],
    },
});

export default model<ChipsetInterface>('Chipset', schema);
