import React from 'react'

const ColorSwitch = () => {
  return (
    <button onClick={e => {
        e.stopPropagation();
        onChangeColor();
    }} style = {{border:'2px solid black'}}>
        Change Color
    </button>
  )
}

export default ColorSwitch