import React, { useEffect } from 'react'
import { photos } from '../../data/trendings'
import Gallery from 'react-photo-gallery'
import './PhotoGallery.css'
import Aos from 'aos'
const PhotoGallery = () => {
    useEffect(()=>{
        Aos.init({duration:700})
    },[])
   
  return (
    <div className='gallery_main'>
        <h1 className='photo_gallery_head'>Gallery</h1>
        <div data-aos="fade-in"><Gallery photos={photos} /></div>
        
    </div>
  )
}

export default PhotoGallery