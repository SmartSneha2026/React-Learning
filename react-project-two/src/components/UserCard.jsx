import React from 'react'
import sneha1 from '../assets/sneha1.jpeg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className="user-container" style ={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt='love'></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
      
  )
}

export default UserCard
