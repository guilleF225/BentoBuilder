import { useState, useEffect } from 'react'
import GridItem from './components/GridItem'
import CodeBlock from './components/CodeBlock'
import Input from './components/Input'
import Button from './components/Button'


import './App.css'
import IconGithub from './components/icons/GitHub'
import IconLinkedin from './components/icons/LinkedIn'

function App() {
  const [totalItems, setTotalItems] = useState(8)
  const [columns, setColumns] = useState(4)
  const [rows, setRows] = useState(3)
  const [gap, setGap] = useState(30)
  const [padding, setPadding] = useState(5)
  const [margin, setMargin] = useState(0)
  const [showCode, setShowCode] = useState(false)
  const [showContainerCode, setShowContainerCode] = useState(false)
  const [gridItemsStyles, setGridItemsStyles] = useState([{
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
  useEffect(() => {
    console.log(gridItemsStyles)
  }, [gridItemsStyles])

  useEffect(() => {
    setGridItemsStyles(Array.from({ length: totalItems }, (_, index) => ({
      index,
      gridArea: 'auto / auto / auto / auto'
    })))
    console.log(gridItemsStyles)
  }, [])

  useEffect(() => {
    if (gridItemsStyles.length < totalItems) {
      setGridItemsStyles(prev => [...prev, {
        index: prev.length,
        gridArea: 'auto / auto / auto / auto'
      }])
    } else {
      setGridItemsStyles(prev => prev.slice(0, totalItems))
    }
  }, [totalItems])
  const handleExportCode = () => {
    console.log(exportCode(), exportGridItemStyles())
  }
  
  useEffect(() => {
    setShowCode(false)
    setShowContainerCode(false)
  }, [totalItems])


  const renderItems = () => {
    return gridItemsStyles.map(item => <GridItem key={item.index} setGridItemsStyles={setGridItemsStyles} gridItemsStyles={gridItemsStyles}  index={item.index} setTotalItems={setTotalItems} />)
  };

  const exportGridItemStyles = () => {
    return (gridItemsStyles.flatMap(item => `.gridItem${item.index} {
      grid-area: ${item.gridArea};
    }
    `))
  }

  const exportCode = () => {
    const gridContainerStyles = `
    .Container {
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      grid-template-rows: repeat(${rows}, 1fr);
      gap: ${gap}px;
      padding: ${padding}px;
      margin: ${margin}px;
    }
    `;
    return gridContainerStyles
  }


  // render Bento grid items

  const bentoGridStyles = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`,
    padding: `${padding}px`,
    margin: `${margin}px` 
  }
  const handleShowItemsCode = () => {
    setShowCode(true)
    setShowContainerCode(false)
  }
  const handleShowContainerCode = () => {
    setShowCode(false)
    setShowContainerCode(true)
  }

  return (
    <div className="Container relative  flex  flex-col justify-center ">
      <header className="flex w-full flex-row h-12 p-4 items-center bg-[--bg-100] justify-evenly opacity-70 backdrop:blur-md border-b border-[--primary-200]">
        <div>
          <h1 className="text-3xl font-bold text-[--primary-300]">
            Bento Grid Builder
          </h1>
        </div>
        <nav className="flex flex-row justify-around gap-3">
          <IconGithub
            onClick={() =>
              window.open("https://github.com/guilleF225/BentoBuilder")
            }
            className="w-8 h-8 hover:cursor-pointer hover:text-[--primary-300] "
          />
          <IconLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/guillermo-fernandez-555ab5290/"
              )
            }
            className="w-8 h-8 hover:cursor-pointer hover:text-[--primary-300]"
          />
        </nav>
      </header>
      <div className="flex flex-row gap-4 justify-evenly p-4">
        <aside className="flex items-start flex-wrap flex-row  md:flex-nowrap md:flex-col min-w-52 md:float-start p-2 gap-2 md:h-full border border-[--primary-200] rounded-xl text-[--text-100] ">
          <h2 className="text-2xl ">Parameters : </h2>
          <p>Total items</p>{" "}
          <Input
            type="number"
            value={totalItems}
            onChange={(e) => setTotalItems(e.target.value)}
          ></Input>
          <p>Columns</p>{" "}
          <Input
            type="number"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
          ></Input>
          <p>Rows</p>{" "}
          <Input
            type="number"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
          ></Input>
          <p>Gap</p>{" "}
          <Input
            type="number"
            value={gap}
            onChange={(e) => setGap(e.target.value)}
          ></Input>
          <p>Padding</p>{" "}
          <Input
            type="number"
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
          ></Input>
          <p>Margin</p>{" "}
          <Input
            type="number"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
          ></Input>
          <Button
            onClick={() => handleShowItemsCode()}
            className="btn btn-primary "
            Children={"Get Container Code"}
          >
            Get Items Code
          </Button>
          <Button
            onClick={() => handleShowContainerCode()}
            className="btn btn-primary"
            Children={"Get Items Code"}
          >
            Get Container Code
          </Button>
          {showCode && (
            <CodeBlock
              totalItems={totalItems}
              gridItemsStyles={gridItemsStyles}
              exportCode={exportCode}
            />
          )}
          {showContainerCode && (
            <CodeBlock
              showContainerCode={showContainerCode}
              totalItems={totalItems}
              gridItemsStyles={gridItemsStyles}
              exportCode={exportGridItemStyles}
            />
          )}
        </aside>

        <main className="w-fit">
          <div className="BentoGrid" style={bentoGridStyles}>
            {renderItems()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App
