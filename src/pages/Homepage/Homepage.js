import React, { useEffect } from "react";
import "./Homepage.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout/MainLayout";
import { Button } from "react-bootstrap";
import Stars from "../../components/Stars/Stars";
import Aos from "aos";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";
import CustomTitle from "../../utils/CustomTitle";
import Teams from '../../components/Teams/Teams'
const Homepage = () => {
  useEffect(()=>{
    Aos.init({duration:700})
  },[])
  const navigate = useNavigate();
  return (
    <MainLayout>
      <CustomTitle title="Home" />
       <Stars>
      <div className="home__container">
        <div className="home__innercontainer">
          <div className="home__content">
            <div className="home__title">
              <span className="Font" data-aos="fade-down">R</span><span data-aos="zoom-in">OOT</span><span className="Font" data-aos="fade-up">S</span>
            </div>
            <br></br>
            <div className="home__intro" data-aos="zoom-in">
            Discover the Hidden Gems of Tradition and Culture with Locals 
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
      <Teams/>
      </Stars>
    </MainLayout>
  );
};

export default Homepage;
