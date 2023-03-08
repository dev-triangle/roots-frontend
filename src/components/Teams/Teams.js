import React from 'react'
import './Teams.css'
import { peoples } from '../../data/team'
import TeamCard from './TeamCard'
const Teams = () => {
  return (
    <div className='team__container'>
        <h1 className='team__header'>Teams</h1>
        <TeamCard/>
    </div>
  )
}

export default Teams