import React, { useEffect, useState } from 'react'
import './Places.css'
import { useNavigate } from 'react-router-dom';
import PlaceDetDialog from '../../components/PlaceDetDialog/PlaceDetDialog';
import Aos from 'aos';
const PlaceCard = ({placeName, placeImage,placeDesc,placeId}) => {
    const[open,setOpen]=useState(false);
    const navigate=useNavigate();
    const handleClose=()=>{
        setOpen(false)
    }
    useEffect(()=>{
        Aos.init({duration:700})
      },[])
  return (
    <div className="place__card" data-aos="zoom-in">
        <PlaceDetDialog open={open} handleClose={handleClose} setOpen={setOpen} placeDesc={placeDesc} placeImage={placeImage} placeName={placeName}/>
        <img className='place__card_pimg' src={placeImage} alt="place_img" />
        <p className='place__card_pname'>{placeName}</p>
        <div className="place__card__btns">
            <button onClick={()=>{
                setOpen(true);
            }}  className='place__card_v_btn place__card__cbt'>View</button>
            <button className='place__card_b_btn place__card__cbt' onClick={()=>{
                navigate(`/places/${placeId}`)
            }}>Book </button>
        </div>
    </div>
  )
}

export default PlaceCard