import React from 'react'
import './TeamCard.css' 
function TeamCard(props) {
  return (
    <div class="card">
    <div class="img-container">
        <div class="img">
            <img src={props.image} alt="demo"/>
        </div>
        <div class="description">
            <span class="title">
                {props.name}
            </span>
        </div>
    </div>
</div>
  )
}

export default TeamCard