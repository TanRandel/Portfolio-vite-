import React from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import the Splide CSS separately.
import manicure from '../images/manicure.jpg';
import transition from '../transition';
import { motion } from 'framer-motion';
import {  BiLogoGithub } from "react-icons/bi";
const Works = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
    <WorksContainer>
      <Article>
        <H1>"I create a <span className='sight'>dynamic</span> and <span className='sight'>user-friendly website</span> using modern <br/> <span className='sight'>Front-end </span> technologies to showcase my skills in <span className='sight'>web-development</span>."</H1>
      </Article>
      <Article>
        <ImagesSlider options={{ perPage: 1, gap: '20px', arrows: false,  }}>
        <Slider>
          
            <div>
            <h3>Recipe Site</h3>
            <h4>ReactJs</h4>
            <h4>CSS Styled Component</h4>
            <h4>Framer</h4>
            <h4>SliderJs</h4>
            <h4>LiveSite</h4>
            <h4><BiLogoGithub size={25} color="#FF5600"/>GitRepo</h4>
            </div>
            <Image src={manicure} alt="Image 1" />
          </Slider>
          <Slider>
            <div>
            <h3>CineFlix Movie </h3>
            <h4>ReactJs</h4>
            <h4>CSS Styled Component</h4>
            <h4>Framer</h4>
            <h4>SliderJs</h4>
            <h4>LiveSite</h4>
            <h4><BiLogoGithub size={25} color="#FF5600"/>GitRepo</h4>
            </div>
            <Image src={manicure} alt="Image 1" />
          </Slider>
          <Slider>
            <div>
            <h3>E-Commerce</h3>
            <h4>ReactJs</h4>
            <h4>CSS Styled Component</h4>
            <h4>Framer</h4>
            <h4>SliderJs</h4>
            <h4>LiveSite</h4>
            <h4><BiLogoGithub size={25} color="#FF5600"/>GitRepo</h4>
            </div>
            <Image src={manicure} alt="Image 1" />
          </Slider>
          <Slider>
            <div>
            <h3>Nike Clone </h3>
            <h4>ReactJs</h4>
            <h4>CSS Styled Component</h4>
            <h4>Framer</h4>
            <h4>SliderJs</h4>
            <h4>LiveSite</h4>
            <h4><BiLogoGithub size={25} color="#FF5600"/>GitRepo</h4>
            </div>
            <Image src={manicure} alt="Image 1" />
          </Slider>
        </ImagesSlider>
      </Article>
  </WorksContainer>
  </motion.div>
  );
};

const Slider = styled(SplideSlide)`
  position: relative;

  div {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 20px;
    left: 40px;
    max-width: 80%;
    display: none; // This will hide the div initially
   

    h3 {
     
      color: #FF5600;
      line-height: 0.94;
      letter-spacing: -1.8px;
      font-weight: normal;
      margin: 5px;
    }

    h4 {
      
      border-radius: 10px;
      line-height: 0.94;
      letter-spacing: -1.8px;
      font-weight: bold;
      border: 1px solid black;
      margin: 5px;
      padding: 5px;
    }
    @media (max-width: 768px) {
      /* Responsive adjustments for screens up to 768px wide */
      width: 100%;
      left: 5%;
     
    }

    @media (max-width: 480px) {
      /* Additional adjustments for screens up to 480px wide */
      width: 100%;
      left: 10%;
      
    }
  }
  &:hover {
    div {
      display: flex;
      opacity: 1; // Change opacity to reveal the div with a fade-in effect
    }
  }

  


`;

const WorksContainer = styled.section`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  height: 85vh;

  @media (max-width: 768px) {
    flex-direction: column;
    
  }
 
`;

const Article = styled.article`
  max-width: 50%;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 80%;
  }
  @media (max-width: 400px) {
    max-width: 100%;
  }
`;

const ImagesSlider = styled(Splide)`
  display: flex;

  
`;

const H1 = styled.h1`
  font-size: 4vw;
  margin: 0;
  text-align:left;
  line-height: 0.94;
  letter-spacing: -1.8px;
 
  font-weight: normal;
  .sight {
    color: #FF5600;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 2rem;
   
  }
`;


const Image = styled.img`
  border-radius: 10px;
  margin: 10px 5px;
  width: 90%;
  
  @media (max-width: 768px) {
    width: 100%;
   }

  @media only screen and (min-width: 769px) and (max-width: 1130px){
    width: 100%;
    }

  @media only screen and (min-width: 1696px) and (max-width: 2300px){
      width: 100%;
      }
  
    
`;

export default transition (Works);






