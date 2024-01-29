import { CopyBlock, dracula } from "react-code-blocks"
import { useState, useEffect } from "react"

const CodeBlock = (props) => {
    const [itemsCode, setItemsCode] = useState('')
    const [containerCode, setContainerCode] = useState('')
    const [code, setCode] = useState('')
    const [showCode, setShowCode] = useState(false)

    useEffect(() => {
        setItemsCode('')
        Array.from({ length: props.totalItems }, (_, index) => {
            setItemsCode(prev => {
                return prev +
                `.gridItem${index} {
    grid-area: ${props.gridItemsStyles[index].gridArea};
}
`
            })
        })
        const containerCode = props.exportCode()
        setCode(containerCode + itemsCode)
    }, [props.gridItemsStyles, props.totalItems])
    const codeToShow = props.showContainerCode ? itemsCode : props.exportCode()


    return (
        <div className=" mt-10 h-80 overflow-auto ">
            
            <CopyBlock 
                
                text= {codeToShow}
                language="css"
                theme={dracula}
                showLineNumbers={false}
                codeBlock
            />
            

        </div>
        
    )
}

export default CodeBlock