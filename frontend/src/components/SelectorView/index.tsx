import styles from './selector.module.css';
import Selector from './Selector';
import { Motherboard } from '@/type/Motherboard';


interface pageProps {
    motherboards: Motherboard[]
}

function SelectorView({ motherboards } : pageProps) {
    
    return <div className={styles.selector}>Selector
        <Selector<Motherboard> options={motherboards} label="Plyta glowna" type="motherboard" />
    </div>
}

export default SelectorView;
