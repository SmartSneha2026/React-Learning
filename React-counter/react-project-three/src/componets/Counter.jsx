import React from 'react'
import './Counter.css'
const Counter = () => {
  const [count ,setCount] = React.useState(0);
  return (
    <div class="counter-conatiner">
       <p id='para'>You have Clicked {count} times</p>
       <button id='btn' onClick={() => {setCount(count+1)} }> Click me </button>
    </div>
  )
}

export default Counter
 