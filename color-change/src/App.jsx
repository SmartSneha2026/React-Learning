import { useState } from 'react'

import './App.css'
import ColorSwitch from './components/ColorSwitch'

function App() {
  const [count, setCount] = useState(0)
  function handleClickOutside() {
    setCount(c => c+1)
}
function getRandomColor() {
  let r = 150+ Math.round(100+Math.random());
  let g = 150+ Math.round(100+Math.random());
  let b = 150+ Math.round(100+Math.random());
  return `rgb($(r) , $(g) , $(b))`;
}
function handleChangleColor() {
  let bodyStyle = document.body.style ;
  bodyStyle.backgroundColor =getRandomColor();
}
  return (
   <div className='App' style={{width: '100%', height:'100%'}} onClick = {handleClickOutside}>
    <ColorSwitch onChangeColor ={handleChangleColor}/>
    <br/>
    <br/>
    <h2>Click on the pages : {count}</h2>
   </div>
  )
}

export default App
