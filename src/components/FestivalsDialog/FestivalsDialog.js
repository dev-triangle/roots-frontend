import React from "react";
import { Dialog } from "@mui/material";
import "./FestivalDialog.css";
const FestivalsDialog = ({ open, setOpen, handleClose, festDesc,festName }) => {
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
      <div className="festivals__dialog">
        <h2>{festName}</h2>
        <p className="fest_desc">{festDesc}</p>
      </div>
    </Dialog>
  );
};

export default FestivalsDialog;
