interface SelectorProps<ElementType> {
    options: ElementType[]
    label: string
    type: string
}


function Selector<ElementType extends { model: string, brand: string}>({ options, type, label }: SelectorProps<ElementType>) {
    console.log('!!!,', options)
    return <div><label htmlFor={type}>{label}</label>
        <select name={label} id={label}>
            {options.map(({ model, brand }) => (<option>{`${model} (${brand})`}</option>))}
        </select>
    </div>
}

export default Selector;
