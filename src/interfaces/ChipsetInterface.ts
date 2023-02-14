import { Types } from 'mongoose';
import { BasicInterface } from './BasicInterface';
export interface ChipsetInterface extends BasicInterface {
    brand: Types.ObjectId;
}
