import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client';
import GetSecondaryPartsBy from '@/queries/getSecondaryParts';
import Selector from '../Selector';
import actions from '@/src/middleware/actionConsts';
import { Action } from '@/src/middleware/useReducer'


interface SecondaryPartsProps {
    selectedMotherboardId: string;
    dispatch: React.Dispatch<Action>;
}


function SecondaryParts({ selectedMotherboardId, dispatch } : SecondaryPartsProps ) {

    const { data } = useQuery(GetSecondaryPartsBy, { client, variables: { id: selectedMotherboardId } })

    const selectCPU = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: actions.SELECT_CPU, payload: e.target.value })
    }

    const selectGraphic = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: actions.SELECT_GRAPHIC, payload: e.target.value })
    }

    const selectRam = (e:  React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: actions.SELECT_RAM, payload: e.target.value })
    }

    const selectCase = (e:  React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: actions.SELECT_CASE, payload: e.target.value })
    }

    if (!data?.getMotherboardsBy.length) {
        return <div />;
    }

    const { getMotherboardsBy } = data;
    const [motherboard] = getMotherboardsBy;
    return (<>
        {!!motherboard.relatedCpus.length && <Selector type="cpu" label="CPU" options={motherboard.relatedCpus} onChange={selectCPU} startingText='choose the cpu'/>}
        {!!motherboard.relatedRam.length && <Selector type="ram" label="Ram" options={motherboard.relatedRam} onChange={selectRam} startingText='choose the ram' />}
        {!!motherboard.relatedGraphics.length && <Selector type="graphics" label="Graphic" options={motherboard.relatedGraphics} onChange={selectGraphic} startingText='choose the graphic card'/>}
        {!!motherboard.relatedCases.length && <Selector type="cases" label="Case" options={motherboard.relatedCases} onChange={selectCase} startingText='choose the case'/>}
    </>)
}


export default SecondaryParts;
