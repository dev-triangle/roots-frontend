import React from 'react'
import './ProfilePg.css'
import MainLayout from '../../components/MainLayout/MainLayout'

const ProfilePg = () => {

  
  return (
    <MainLayout>
        
        <div className='="wrapper"'>
          <div className='ccard'>
          <div className='card'>
            <img src="https://cdn.travelpulse.com/images/31aaedf4-a957-df11-b491-006073e71405/bb73aab8-f2bf-4278-88c3-33dd628df23f/630x355.jpg" className='card_image'/>
            <h2 className='card_title '> Ready for a Mesmorizing Experiance</h2>
            <p className='card_description'>ACTIVITY</p>
          <p className='card_description'>DATE OF VISIT</p>
          </div>

          <div className='card'>
            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/08/24145640/Untitled-design-2022-08-24T145349.164-1600x900.jpg" className='card_image'/>
            <h2 className='card_title '> Ready for a Mesmorizing Experiance</h2>
            <p className='card_description'>ACTIVITY</p>
          <p className='card_description'>DATE OF VISIT</p>
          </div>

          <div className='card'>
            <img src="https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"  className='card_image'/>
            <h2 className='card_title '> Ready for a Mesmorizing Experiance</h2>
            <p className='card_description'>ACTIVITY</p>
          <p className='card_description'>DATE OF VISIT</p>
          </div>
          </div>
        </div>
    </MainLayout>
  )
}



export default ProfilePg