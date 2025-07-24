import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //change state
  //manage state
  // sbhi child ko sync krw DUNGA
  const [name, setName] = useState();
  const [age, setAge] = useState();
  return (
    <div>
     <Card title='Card1' name ={name} setName = {setName}/>
     <Card title ='Card2' name ={age} setName = {setAge} />
      {/*<p>Name state variable ki value inside App : {name}</p> */}
    </div>
  )
}

export default App
