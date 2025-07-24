import {useSelector , useDispatch } from 'react-redux'
import {increment, decrement, reset} from './Features/counter/counterSlice' ;
import './App.css'
import {useState} from 'react';
function App() {
  const [amount , setAmount] = useState()
  const count = useSelector ((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementClick() {
  dispatch(increment());
  }
function handleDecerementClick() {
  dispatch (decrement());
} 
 function handleResetClick() {
  dispatch(reset());
 }
 function handleIncAmountClick() {
  dispatch(incrementByAmount(amount));
 }

  return (
   <div className ='container'>
       <button onClick={handleIncrementClick}>+</button>
       <p>Count:{count}</p>
       <button onClick = {handleDecerementClick} >-</button>
       <br />
       <br />
       <button onClick = {handleResetClick}>Reset</button>
       <br />
       <br />
       <input type ='Number'
        value = {amount} 
        placeholder ='Enter Amount'
        onChange ={(e) => setAmount(e.target.value) }/>
        <br />
        <br />
        <button onClick={handleIncAmountClick}>Inc by Amount</button>
   </div>
  )
}

export default App
