import React from 'react'
import './AttractionsDialog.css'
import { Dialog } from '@mui/material'
const AttractionsDialog = () => {
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
    </Dialog>
  )
}

export default AttractionsDialog