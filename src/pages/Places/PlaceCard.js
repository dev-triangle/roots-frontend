import React from 'react'
import './Places.css'
const PlaceCard = ({placeName, placeImage,placeDesc}) => {
  return (
    <div className="place__card">
        <img className='place__card_pimg' src={placeImage} alt="place_img" />
        <p className='place__card_pname'>{placeName}</p>
        <div className="place__card__btns">
            <button className='place__card_v_btn'>View Details</button>
            <button className='place__card_b_btn'>Book Package</button>
        </div>
    </div>
  )
}

export default PlaceCard