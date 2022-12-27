import React from 'react'
import './Homepage.css'
import MainLayout from '../../components/MainLayout/MainLayout'
const Homepage = () => {
  return (
    <MainLayout>
    <div className='home_container'>
     <div className='home_title'>ROOTS</div>
      <div className='home_intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc, tortor mauris eget ut integer sit. Purus consequat urna vulputate turpis blandit sed.</div>
       <div className='home_button'><span className='h_button'>EXPLORE</span></div>
      
    </div>
    </MainLayout>
  )
}

export default Homepage