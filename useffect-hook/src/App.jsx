import { useEffect , useState } from 'react'

import './App.css'
import LoggerComponent from './componets/LoggerComponent'
import TimerComponet from './componets/TimerComponet'
import DataFetcher from './componets/DataFetcher'
import ResizeComponets from './componets/ResizeComponets'
import MultiEffectCoponent from './componets/MultiEffectCoponent'

function App() {
   //const [count, setCount] = useState(0);
   //const[total , setTotal] = useState(1);
  // first - side-effect function
  // second - cleanup function
  // third - dependencies array

  // Variation:1 run on every render
  //useEffect(() => {
  //  alert('i will render on each render')
 //})
   

 // Variation:2 run on first render

 /*useEffect(() => {
  alert("I will run on on;y 1st render");
 }, []) 
 useEffect(() => {
  alert('I will run every time when count is updated');
}, [count] ) 

// Variation :4 multiple dependencies
 useEffect(() => {
  alert(' I will run when count or total is updated');
 }, [count, total])
  

 // Variration : 5 iss baar add clean up function
 useEffect(() => 
 {
  alert('Count is updated');
  return () => {
    alert('Count is unmounted fro m UI');
  }
 } , [count]
)

 
 function handleClick() {
    setCount(count +1);
    
   }  

   function handleClickTotal() {
    setTotal(total +1);
   }
*/
  //Variation : 3 I will run every time count is updated

  return (
    
    <div>
      {/* <button onClick={handleClick}>update Count</button>
       <br />
       Count is : {count}
       <br />
       <button onClick={handleClickTotal}>update total</button>
       <br />
       total is : {total}

       <LoggerComponent/>
       */}
       <MultiEffectCoponent/>
       <ResizeComponets/>
       <DataFetcher/>
       <TimerComponet/>
    </div>
  )
  }

export default App 
