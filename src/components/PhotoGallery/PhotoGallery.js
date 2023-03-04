import React from 'react'
import { photos } from '../../data/trendings'
import Gallery from 'react-photo-gallery'
import './PhotoGallery.css'
const PhotoGallery = () => {
   
  return (
    <div className='gallery_main'>
        <h1 className='photo_gallery_head'>Gallery</h1>
        <Gallery photos={photos} />
    </div>
  )
}

export default PhotoGallery