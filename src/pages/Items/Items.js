import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './Items.css'
import ItemsCard from './ItemsCard'
import axios from 'axios'
import {baseUrl}from '../../utils/urls'
import axiosInstance from '../../auth/authHandler'
import Aos from 'aos'
import CustomTitle from '../../utils/CustomTitle'
const Items = () => {
  useEffect(()=>{
    Aos.init({duration:700})
  },[])
  const[itemElements,setItems]=useState([])
  const[userId,setUserId]=useState()
  useEffect(()=>{
    axios.get(`${baseUrl}/items/`).then((response)=>{
      setItems(response.data);
      // console.log(response.data)
    },error=>{

    })
  },[])

 useEffect(()=>{
  axiosInstance.get(`${baseUrl}/current-user/`).then((res)=>{
    // console.log(res)
    setUserId(res.data.id);
  })
 })
  return (
    <div>
        <MainLayout>
          <CustomTitle title="Items"/>
        <div className="items__card_container">
           {itemElements.map((itemElement,index)=>{
            return(
              <ItemsCard itemImage={itemElement.item_image} itemId={itemElement.id} itemDesc={itemElement.item_desc} itemName={itemElement.item_name} key={index} userId={userId}/>
            )
              
           })}
        </div>
        </MainLayout>
    </div>
  )
}

export default Items