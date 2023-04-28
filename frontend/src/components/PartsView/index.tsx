import client from '@/src/middleware/apollo-client';
import { useQuery } from '@apollo/client';
import styles from './partsview.module.css';
import SelectedParts from '@/type/SelectedParts';
import GetRamById from '@/queries/getRamById';

interface PartsViewProps {
    selectedParts: SelectedParts;
}

function PartsView({ selectedParts }: PartsViewProps) {

    const { selectedRamId } = selectedParts;
    // TO-DO: use the selected ids from props to pull specific data for each part and use it to render the SVG and labels
    if (selectedRamId) {
        const { data, loading, error } = useQuery(GetRamById, { client, variables: { id: selectedRamId } })
    }
    
    return (<div className={styles.view}>
        <svg viewBox="0 0 500 500" className={styles.svg}>
            <rect x="10" y="10" width="480" height="480" rx="5" strokeWidth="3" ry="5" stroke="#000" fill="#fff" />

            <rect x="40" y="50" width="60" height="30" className={styles.fitting} />
            <rect x="40" y="90" width="60" height="30" strokeWidth="2" stroke="#666" fill="#fff" />
            <rect x="40" y="130" width="60" height="30" stroke="#666" strokeWidth="2" fill="#fff" />
            <rect x="40" y="170" width="60" height="30" stroke="#666" strokeWidth="2" fill="#fff" className={styles.movingLine} />

            <rect x="120" y="220" width="100" height="100" rx="3" ry="3" fill="#fff" strokeWidth="2" stroke="#000" />

            <rect x="280" y="50" width="120" height="240" fill="#fff" strokeWidth="2" stroke="#1cf" />

            <circle cx="400" cy="400" r="60" strokeWidth="2" stroke="#555" fill="#fff" />

            <rect x="36" y="86" width="68" height="38" opacity="0.8" className={styles.notFitting} />

        </svg>
    </div>)
}


export default PartsView;
