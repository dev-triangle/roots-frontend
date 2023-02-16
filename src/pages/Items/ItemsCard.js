import React, { useState } from 'react'
import ItemsDetDialog from '../../components/ItemsDetDialog/ItemsDetDialog'
const ItemsCard = ({itemName,itemImage,itemDesc}) => {
  const[pName,setPName]=useState('');
  const[open,setOpen]=useState(false);
  const handleClose=()=>{
    setOpen(false);
  }
  return (
    <div className='item__card__body'>
      <ItemsDetDialog open={open} handleClose={handleClose} pName={pName} itemDesc={itemDesc}/>
      <img className='item__card_img' src={itemImage} alt="item__image" />
      <p>{itemName}</p>
      <div className="item__btns">
        <button className="item__purchase_btn">Purchase</button>
        <button className="item__view_btn" onClick={()=>{
          setOpen(true);
          setPName(itemName)
          
        }}>View Details</button>
      </div>


    </div>
  )
}

export default ItemsCard