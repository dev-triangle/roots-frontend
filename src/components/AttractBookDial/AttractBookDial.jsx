import React from 'react'
import './AttractBookDial.css'
import { Dialog } from '@mui/material'
const AttractBookDial = ({open,handleClose,finalSubmit}) => {
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
        <div className="dialog__book_confirm">
            <p>Are u sure u wanna book????</p>
            <div className="dialog__book_confirm btns">
                <button onClick={()=>{finalSubmit()
                handleClose();
                }}>Yes</button>
                <button onClick={()=>{handleClose()}}>No</button>
            </div>
        </div>
    </Dialog>
  )
}

export default AttractBookDial