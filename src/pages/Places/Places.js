import React, { useState } from 'react'
import './Places.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import PlaceCard from './PlaceCard'
import axios from 'axios'
import { useEffect } from 'react'
import { baseUrl } from '../../utils/urls'
const Places = () => {
  const[places,setPlaces]=useState([])
  useEffect(()=>{
    axios.get(`${baseUrl}/places/`).then((res)=>{
      setPlaces(res.data)
    },(err)=>{
      
    })
  },[])
    return (
    <MainLayout>
      <div className="places__main_container">
        <h1>Places</h1>
        <div className="places__cards_container">
          {places.map((place,index)=>{
            return(
            <PlaceCard key={index} placeId={place.id} placeName={place.place_name} placeImage={place.place_image} placeDesc={place.place_description}/>
            )
          })}
          
        </div>
      </div>
    </MainLayout>
  )
}

export default Places