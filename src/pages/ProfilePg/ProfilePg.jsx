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
      <CustomTitle title="Profile"/>
      <h1>My Profile</h1>
      <div className="profile__box">
        <p>Roots ID: RT{user.id}</p>
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>

      <BookedData/>
      <PurchaseData/>
    </MainLayout>
  )
}

export default ProfilePg