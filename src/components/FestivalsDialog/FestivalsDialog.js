import React from 'react'
import { Dialog } from '@mui/material'

const FestivalsDialog = ({open,setOpen,handleClose,festDesc}) => {
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
        <p className='fest_desc'>{festDesc}</p>
    </Dialog>
  )
}

export default FestivalsDialog