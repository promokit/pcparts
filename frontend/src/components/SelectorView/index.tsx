import Selector from '../Selector';
import SecondaryParts from '../SecondaryParts';
import { Motherboard } from '@/type';
import styles from './selector.module.css';
import actions from '@/src/middleware/actionConsts';
import { Action } from '@/src/middleware/useReducer'


interface componentProps {
    motherboards: Motherboard[];
    selectedMotherboardId: string;
    dispatch: React.Dispatch<Action>;
}

function SelectorView({ motherboards, selectedMotherboardId, dispatch }: componentProps) {

    const onMotherboardSelected = (e: React.ChangeEvent<HTMLSelectElement>) => { dispatch({type: actions.SELECT_MOTHERBOARD, payload: e.target.value})}
    return (
        <div className={styles.selector}>
            <Selector<Motherboard> options={motherboards} type="motherboard" label="Motherboard" onChange={onMotherboardSelected} startingText='choose the motherboard'/>
            {selectedMotherboardId && <SecondaryParts selectedMotherboardId={selectedMotherboardId} dispatch={dispatch} />}
        </div>);
}

export default SelectorView;
