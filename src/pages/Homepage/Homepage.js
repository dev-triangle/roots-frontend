import React from "react";
import "./Homepage.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout/MainLayout";
import { Button } from "react-bootstrap";
import Stars from "../../components/Stars/Stars";
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="home__container">
        <div className="home__innercontainer">
          <div className="home__content">
            <div className="home__title">
              <span className="Font">R</span>OOT<span className="Font">S</span>
            </div>
            <br></br>
            <div className="home__intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              nunc, tortor mauris eget ut integer sit. Purus consequat urna
              vulputate turpis blandit sed.
            </div>
            <Button className="home__button" onClick={()=>{
              navigate('/places')
            }}>
              EXPLORE
              <i className="arrow_icon">
                &nbsp; &nbsp;
                <FaArrowRight />
              </i>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
