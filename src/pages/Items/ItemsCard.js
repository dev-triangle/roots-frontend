import React, { useState } from 'react'
import ItemsDetDialog from '../../components/ItemsDetDialog/ItemsDetDialog'
import { baseUrl } from '../../utils/urls';
import axiosInstance from '../../auth/authHandler';
import { toast } from 'react-hot-toast';
import Aos from 'aos';
import { useEffect } from 'react';
const ItemsCard = ({itemName,itemImage,itemDesc,itemId,userId}) => {
  useEffect(()=>{
    Aos.init({duration:700})
  },[])
  const[pName,setPName]=useState('');
  const[open,setOpen]=useState(false);
  const handleClose=()=>{
    setOpen(false);
  }
 
  let date=new Date();
  const isoDateString = date.toISOString().substring(0, 10);
  const purchaseItem=(e)=>{
      axiosInstance.post(`${baseUrl}/purchases/`,{
        date_of_purchase: isoDateString,
        item_foreign_key: itemId,
        user_foreign: userId
    }).then((response)=>{
      // console.log("purchase: ",response)
      if(response.status===201){
        toast.success("Succesfully placed the order!!");
      }
    })
    
  }
  return (
    <div className='item__card__body' data-aos="zoom-in">
      <ItemsDetDialog open={open} handleClose={handleClose} pName={pName} itemDesc={itemDesc}/>
      <img className='item__card_img' src={itemImage} alt="item__image" />
      <p>{itemName}</p>
      <div className="item__btns">
        <button className="item__purchase_btn" onClick={()=>{
          purchaseItem();
        }}>Purchase</button>
        <button className="item__view_btn" onClick={()=>{
          setOpen(true);
          setPName(itemName)
          
        }}>View Details</button>
      </div>


    </div>
  )
}

export default ItemsCard