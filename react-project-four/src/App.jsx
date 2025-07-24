
import './App.css'
import Btn from './components/Btn';
import Card from './components/Card'

function App() {
 
   const [count , setCount] =React.useState(0);
   function handleClick(){
    setCount(count + 1);
   }
  return (
   
     
      
      <div>
        <Btn incrementCount = {handleClick} text="Click me">
          <h1 >{count}</h1>
        
        </Btn>
        </div>
    
    
  )
}

export default App
