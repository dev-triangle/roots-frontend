import React from 'react'
import Navbar from '../Navbar/Navbar'
const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout