import React from 'react'
import './Homepage.css'
import { FaArrowRight } from "react-icons/fa";

//import MainLayout from '../../components/MainLayout/MainLayout'
const Homepage = () => {
  return (
    //<MainLayout>
    <div className='home_container'>
      <div className='home_content'>
     <div className='home_title'><span className='Font'>R</span>OOT<span className='Font'>S</span></div>
     <br></br>
      <div className='home_intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nunc, tortor mauris eget ut integer sit. Purus consequat urna vulputate turpis blandit sed.</div>
       <div className='home_button'>EXPLORE<i className='arrow_icon'>&nbsp; &nbsp;<FaArrowRight/></i></div>
       </div>
    </div>
    //</MainLayout>
  )
}

export default Homepage