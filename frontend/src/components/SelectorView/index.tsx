import Selector from './Selector';
import { Motherboard, CPU } from '@/type';


interface componentProps {
    motherboards: Motherboard[]
    cpus: CPU[]
}

function SelectorView({ motherboards, cpus }: componentProps) {

    return (
        <div>
            <Selector<Motherboard> options={motherboards} label="Plyta glowna" type="motherboard" />
            <Selector<CPU> options={cpus} label="Procesor" type="cpu" />
        </div>);
}

export default SelectorView;
