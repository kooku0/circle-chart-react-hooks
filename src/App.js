import React from 'react'
import CircleChart from './component/chart/circle-chart.js'
import useNumberAnimation from './hooks/use-number-animation'

function App() {
  const [value1, setNumber1] = useNumberAnimation(0)
  const [value2, setNumber2] = useNumberAnimation(0)
  const [value3, setNumber3] = useNumberAnimation(0)
  function handleClick() {
    setNumber1(20, 20)
    setNumber2(60, 20)
    setNumber3(80, 20)
  }
  return (
    <div>
      <button type="button" onClick={handleClick}> button</button>

      <div style={{displa: 'table', width: '100%'}}>
        <div style={{display: 'table-row'}}>
          <div style={{display: 'table-cell', heigth: '150px', width: '150px'}}>
            <CircleChart
              color="red"
              percentage={value1}
            />
          </div>
          <div style={{display: 'table-cell', heigth: '150px', width: '150px'}}>
            <CircleChart
              color="blue"
              percentage={value2}
            />
          </div>
          <div style={{display: 'table-cell', heigth: '150px', width: '150px'}}>
            <CircleChart
              color="green"
              percentage={value3}
            />
          </div>
        </div>      
      </div>

    </div>
  );
}

export default App
