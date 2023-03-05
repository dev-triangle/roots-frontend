import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './ProfilePg.css'
import BookedData from './BookedData'
import PurchaseData from './PurchaseData'
const ProfilePg = () => {
  return (
    <MainLayout>
      <div className="profile__box">

      </div>
      <BookedData/>
      <PurchaseData/>
    </MainLayout>
  )
}

export default ProfilePg