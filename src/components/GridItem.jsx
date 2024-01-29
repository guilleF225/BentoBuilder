import { useEffect, useState } from "react"
import Input from "./Input"
import Remove from "./Remove"

// eslint-disable-next-line react/display-name
const GridItem = ( props ) => {
    const [gridAreaRow, setGridAreaRow] = useState(1)
    const [gridAreaCol, setGridAreaCol] = useState(1)
   
   
     const handleDelete = () => {
        props.setTotalItems(prev => prev - 1)
        props.setGridItemsStyles(prev => prev.filter(item => item.index !== props.index))

    }
    const gridItemStyle = {
        gridArea: `auto / auto / span ${gridAreaRow} / span ${gridAreaCol}`
    }

    useEffect(() => {
        props.setGridItemsStyles(props.gridItemsStyles.map(item => {
            if (item.index === props.index) {
                return {
                    ...item,
                    gridArea: `auto / auto / span ${gridAreaRow} / span ${gridAreaCol}`
                }
            }
            return item
        }))
    }, [gridAreaRow, gridAreaCol])

    return (
        <div className="grid-item shadow-md shadow-slate-500 bg-[--bg-200] text-[--text-200] flex justify-center gap-2 flex-col" style={gridItemStyle}>
            
            <p>Item Area</p>
            <Input value={gridAreaRow} onChange={e => setGridAreaRow(e.target.value)} type="number" />
            x
            <Input value={gridAreaCol} onChange={e => setGridAreaCol(e.target.value)} type="number" />
            <Remove onClick={() => handleDelete()} />
        </div>
    )
}

export default GridItem