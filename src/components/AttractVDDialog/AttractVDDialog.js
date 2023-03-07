import React from "react";
import "./AttractVDDialog.css";
import { Dialog } from "@mui/material";
const AttractVDDialog = ({ attractDesc, openDet, handleCloseDet }) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "100%", borderRadius: 5, m: 2, minHeight: "60vh" },
      }}
      open={openDet}
      onClose={handleCloseDet}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className="attract__dialog_main">
        <p>{attractDesc}</p>
      </div>
    </Dialog>
  );
};

export default AttractVDDialog;
