import React from 'react'
import { Dialog } from '@mui/material'
import './ItemsDetDialog.css'
const ItemsDetDialog = ({open,handleClose,pName,itemDesc}) => {
  return (
    <div>
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
        <h1 className='item_head'>{pName}</h1>
        <p className='item_desc'>{itemDesc}</p>

        </Dialog>
    </div>
  )
}

export default ItemsDetDialog