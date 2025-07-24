import React from 'react'
import {useEffect , useState} from 'react'

function TimerComponet (){
  const [seconds , setSeconds] = useState(0);

  useEffect (() => {
    const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)}, 1000);
    return () => {
        clearInterval(intervalId);
    };
  }, [])

  
  
  return (
    <div>
       <h1>Second :{seconds}</h1> 
    </div>
  )
}

export default TimerComponet