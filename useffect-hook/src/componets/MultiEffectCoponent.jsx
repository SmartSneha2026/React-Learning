import React from 'react'
import {useEffect, useState} from 'react'

const MultiEffectCoponent = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0) ;

  useEffect (() => {
    console.log("Count Changed :" , count);
  }, [count]);
  useEffect(() => {
    const intervalId = setInterval(() =>{
        console.log("SetInterval Started")
        setSeconds(prevSeconds => prevSeconds+1);
    }, 1000);
    return () => {
        alert('Time stopped');
        clearInterval(intervalId);
    };c 
  }, []);
   
    return (
    <div> 
        <h1>Count : {count}</h1>
        <button onClick = {() => setCount(count +1)}>Increment Count</button>
        <h2>Seconds: {seconds}</h2>

    </div>
  )
}

export default MultiEffectCoponent