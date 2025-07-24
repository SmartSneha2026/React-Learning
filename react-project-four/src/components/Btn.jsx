import React from 'react'

const Btn = () => {
  return (
    
      <div>
    {props.children}
    <button onClick={props.handleClick }>{props.text}</button>
    </div>
    
  )
}

export default Btn
