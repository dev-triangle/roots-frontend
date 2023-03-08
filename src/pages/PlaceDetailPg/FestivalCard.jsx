import React, { useState } from 'react'
import './PlaceDetailPg.css'
import FestivalsDialog from '../../components/FestivalsDialog/FestivalsDialog'
const FestivalCard = ({festImage,festName,festDesc}) => {
  const[open,setOpen]=useState(false)
  const handleClose=()=>{
    setOpen(false)
  }
  return (
    <div className='festival__card_body'>
      <FestivalsDialog  festDesc={festDesc} open={open} setOpen={setOpen} handleClose={handleClose}/>
        <img className='festival__card_img' src={festImage} alt="afestival_image" />
        <p>{festName}</p>
        <button  className="bg_buttons" onClick={()=>{
          setOpen(true)
        }}>More Details</button>

    </div>
  )
}

export default FestivalCard