import React, { useEffect, useState } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './ProfilePg.css'
import BookedData from './BookedData'
import PurchaseData from './PurchaseData'
import axiosInstance from '../../auth/authHandler'
import { baseUrl } from '../../utils/urls'
import CustomTitle from '../../utils/CustomTitle'
const ProfilePg = () => {
  const[user,setUser]=useState({})
  useEffect(()=>{
    axiosInstance.get(`${baseUrl}/current-user/`).then((response)=>{
      setUser(response.data)
    })
  },[])
  return (
    <MainLayout>
      <div className="profile__pg_main">
      <CustomTitle title="Profile"/>
      <h1 className='photo_gallery_head'>My Profile</h1>
      <div className="profile__box">
        <p>Roots ID: RT{user.id}</p>
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>

      <BookedData/>
      <PurchaseData/>
      </div>
    </MainLayout>
  )
}

export default ProfilePg