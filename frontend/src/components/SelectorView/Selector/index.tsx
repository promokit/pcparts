import { SelectorProps } from '@/type';

function Selector<ElementType extends { model: string, brand: string}>({ options, type, label }: SelectorProps<ElementType>) {
    return <div><label htmlFor={type}>{label}</label>
        <select name={label} id={type}>
            {options.map(({ model, brand }) => (<option key={model}>{`${model} (${brand})`}</option>))}
        </select>
    </div>
}

export default Selector;
