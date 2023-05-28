import useFilterItemStyle from "./FilterItemStyles"



interface FilterItemProps {
    checked: boolean
    handleChange: (e: any) => void
    label: string
    ariaLabel: string
}

function FilterItem({ checked, handleChange, label, ariaLabel }: FilterItemProps) {
    const { filterItemActive, filterItem } = useFilterItemStyle()

    return (
        <label className={checked ? filterItemActive : filterItem}>
            <input
                type="radio"
                onChange={handleChange}
                checked={checked}
                name='type'
                aria-label={ariaLabel}
                hidden
            />
            {label}
        </label>
    )
}



export default FilterItem