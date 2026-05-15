import React from 'react'

function Card(props) {
  return (
    <div className="card">
        <img src={props.img} alt="Profile" />
        <h1>{props.user}</h1>
        <p>{props.user} is a software engineer with a passion for building scalable 
          and efficient applications. With a strong background in computer science, 
          She has experience in various programming languages and framewoks.
        </p>
        <button>View Profile</button>
    </div>
  )
}

export default Card
