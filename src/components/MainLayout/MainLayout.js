import React from 'react'
import Navbar from '../Navbar/Navbar'
import './MainLayout.css'
const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className="mainlayout__container">
        {children}
        </div>
       
    </div>
  )
}

export default MainLayout