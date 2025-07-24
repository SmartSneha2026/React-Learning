import React from 'react'
import {useEffect, useState}  from 'react'
function LoggerComponent ()  {
    const[count , setCount] =useState(0);

    useEffect(() => {
        alert('Componet rendered or count changed' , count) ;
    })
  return (
    <div>
        <h1>Count is : {count}</h1> 
        <br />
        
        <button onClick={()=> setCount(count+1)}> Increment</button> 

    </div>
  )
}

export default LoggerComponent