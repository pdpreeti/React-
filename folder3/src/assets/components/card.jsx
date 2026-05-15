import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
      <div className="card">
        <div>
          <div className="top">
          <img src={props.image} alt={props.company} />
          <button>Save <Bookmark size={20} strokeWidth={1} color="#585b5b"/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.posted}</span></h3>
          <h2>{props.role}</h2>
        <div className="tags">
          <h4>{props.type}</h4>
          <h4>{props.level}</h4>
        </div>
        </div>
        </div>
          <div className="bottom">
            <div>
              <h3>{props.salary}</h3>
              <p>{props.location}</p>
            </div>
              <button>Apply Now</button>
          </div>
      </div>
  )
}

export default Card
