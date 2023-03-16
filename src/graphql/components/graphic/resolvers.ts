import { QueryGetGraphicByArgs as Args } from '../../generated';
import { GraphicInterface as Items } from '../../../models';
import { getGraphics } from '../../../services';

export default {
    Query: {
        getGraphicBy: async (_: any, args: Args): Promise<Items[]> => {
            return await getGraphics(args);
        },
    },
};
