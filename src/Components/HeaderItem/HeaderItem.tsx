import { AccordianIcon } from '../../assets/svgs';
import useHeaderItem from './HeaderItemStyles';




interface HeaderItemProps {
    name: string
    sorting: boolean
    onHandleSorting: (name: string, value: boolean) => void
    objectKey: string
}


function HeaderItem({ name, sorting, onHandleSorting, objectKey }: HeaderItemProps) {
    const { wrapper } = useHeaderItem()
    
    return (
        <button className={wrapper} onClick={() => {
            onHandleSorting(objectKey, !sorting)
        }}>
            <p>{name}</p>
            <div>
                <AccordianIcon color={sorting ? 'rgb(64 92 130)' : '#ccc'} />
            </div>
        </button>
    )
}

export default HeaderItem