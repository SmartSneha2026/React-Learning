import { useState } from 'react'

import './App.css'

function App() {
   function handleClick() {
    alert('I am clicked')
   }
  function handleMouseOver() {
    alert('para ke upr mouse leker aaye ho')
  }

  function handleInputChange(e) {
    console.log('Vlaue still nowis :' , e.target.value);
  }

  function handleSubmit(e) { 
    e.preventDefault() ;
    // i am writing custon behavior down
    alert('form submit kr du kya');
  } 
  return (
    <div>
      <button onClick={() => alert('click')}>Click me</button>

      {/*
      <form onSubmit={handleSubmit}>
        <input type='text' onchange={handleInputChange}></input>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
      {/*}
      <p onMouseOver={handleMouseOver} style={{border : "1px solid black"}}>I am Para</p>
      <button onClick= {handleClick}>click me</button>
      */}
    </div>
  )
}

export default App
