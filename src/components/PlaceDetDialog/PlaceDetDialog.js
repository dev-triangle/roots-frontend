import React from 'react'
import './PlaceDetDialog.css'
import { Dialog } from '@mui/material'
function PlaceDetDialog({open,setOpen,handleClose,placeName,placeImage,placeDesc}) {
  return (
    <Dialog
    fullWidth={true}
    maxWidth={"md"}
    PaperProps={{
      sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "60vh" },
    }}
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <div className="place__det_dialog_body">
        <h1>{placeName}</h1>
        <div className="p_detail__content">
            <img className='place_dialog__image' src={placeImage} alt="place__image" />
            <p className='place__dialog_desc'>{placeDesc}</p>
        </div>
    </div>
    </Dialog>
  )
}

export default PlaceDetDialog