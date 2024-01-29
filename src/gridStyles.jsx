import { useState } from "react"

// create custom react hook to create grid styles

function useGridStyles() {
    const [gridStyles, setGridStyles] = useState([{
        index: 0,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 1,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 2,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 3,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 4,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 5,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 6,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 7,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 8,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 9,
        gridArea: 'auto / auto / auto / auto'
    },
    {
        index: 10,
        gridArea: 'auto / auto / auto / auto'
    },])
    return [gridStyles, setGridStyles]
}

export default useGridStyles