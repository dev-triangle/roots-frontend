import React from "react";
import "./BecomGuidePg.css";
import MainLayout from "../../components/MainLayout/MainLayout";
import BecomeGuideForm from "./BecomeGuideForm";
import { InputLabel } from "@mui/material";
import "./BecomGuidePg.css";
const BecomGuidePg = () => {
  return (
    <MainLayout>
      <div className="guide__page__main_container">
        <img src="" alt="" className="guide__vector" />
        <div className="form__part__guide">
          <h1>Be a Guide</h1>
          <InputLabel id="demo-simple-select-label" className="guide_heading">Place</InputLabel>
          <BecomeGuideForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default BecomGuidePg;
