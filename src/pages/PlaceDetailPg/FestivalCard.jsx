import React from 'react'
import './PlaceDetailPg.css'
const FestivalCard = ({festImage,festName}) => {
  return (
    <div className='festival__card_body'>
        <img className='festival__card_img' src={festImage} alt="afestival_image" />
        <p>{festName}</p>
    </div>
  )
}

export default FestivalCard