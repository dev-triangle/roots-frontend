import React from 'react'
import './Teams.css'
import { peoples } from '../../data/team'
import TeamCard from './TeamCard'
const Teams = () => {
  return (
    <div className='team__container'>
        <h1 className='team__header'>Teams</h1>
        {peoples.map((person,index)=>{
          return(
            <TeamCard key={index} name={person.name} image={person.image}/>
          )
        })}
        
    </div>
  )
}

export default Teams