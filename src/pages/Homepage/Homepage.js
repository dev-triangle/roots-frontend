import React, { useEffect } from "react";
import "./Homepage.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout/MainLayout";
import { Button } from "react-bootstrap";
import Stars from "../../components/Stars/Stars";
import Aos from "aos";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
const Homepage = () => {
  useEffect(()=>{
    Aos.init({duration:700})
  },[])
  const navigate = useNavigate();
  return (
    <MainLayout>
       <Stars>
      <div className="home__container">
        <div className="home__innercontainer">
          <div className="home__content">
            <div className="home__title">
              <span className="Font" data-aos="fade-down">R</span><span data-aos="zoom-in">OOT</span><span className="Font" data-aos="fade-up">S</span>
            </div>
            <br></br>
            <div className="home__intro" data-aos="zoom-in">
             To Root the world
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
      <PhotoGallery/>
      </Stars>
    </MainLayout>
  );
};

export default Homepage;
