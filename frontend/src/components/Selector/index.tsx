interface SelectorProps<ElementType> {
    options: ElementType[];
    label: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    startingText: string;
}


function Selector<ElementType extends { _id: string, model: string }>({ options, type, label, onChange, startingText }: SelectorProps<ElementType>) {
    return (<><label htmlFor={type}>{label}</label>
        <select name={label} id={type} onChange={onChange} defaultValue={startingText}>
            <option disabled value={startingText}> -- {startingText} -- </option>
            {options.map(({ model, _id }) => (<option key={_id} value={_id} >{model}</option>))}
        </select>
    </>);
}

export default Selector;
