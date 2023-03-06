import { SelectorProps } from '@/type';

function Selector<ElementType extends { _id: string, model: string, brand: { name: string}}>({ options, type, label }: SelectorProps<ElementType>) {
    return <div><label htmlFor={type}>{label}</label>
        <select name={label} id={type}>
            {options.map(({ model, brand: { name}, _id }) => (<option key={_id}>{`${model} (${name})`}</option>))}
        </select>
    </div>
}

export default Selector;
