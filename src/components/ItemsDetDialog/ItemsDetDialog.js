import React from 'react'
import { Dialog } from '@mui/material'
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
        <h1>{pName}</h1>
        <p>{itemDesc}</p>

        </Dialog>
    </div>
  )
}

export default ItemsDetDialog