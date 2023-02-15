import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './Items.css'
import ItemsCard from './ItemsCard'
import axios from 'axios'
import {baseUrl}from '../../utils/urls'
const Items = () => {
  const[itemElements,setItems]=useState([])
  useEffect(()=>{
    axios.get(`${baseUrl}/items/`).then((response)=>{
      setItems(response.data);
      console.log(response.data)
    },error=>{

    })
  },[])
  return (
    <div>
        <MainLayout>
        <div className="items__card_container">
           {itemElements.map((itemElement,index)=>{
            return(
              <ItemsCard itemImage={itemElement.item_image} itemName={itemElement.item_name} key={index}/>
            )
              
           })}
        </div>
        </MainLayout>
    </div>
  )
}

export default Items