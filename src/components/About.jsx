import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import transition from '../transition';

const Article = styled.article`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  section {
    
    margin: 0 auto;
  }
`;

const Header = styled.h1`
  margin-top: 40px;
  margin-bottom: 50px;
  font-size: 6.5vw;
  line-height: 0.94;
  letter-spacing: -1.8px;
  font-weight: normal;

  .sight {
    color: #FF5600;
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  

 

 
`;

const About = () => {
  
  const fadeInAnimation = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: 0.2,
      },
    },
  };

  return (
    <Article>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        transition={{ duration: 2}} // You can adjust the duration as needed
      >
        <Header>
          Hi. I’m Randel.<br />A <span className='sight'>Web Developer.</span>,<br />focused on user interfaces<br /> and user experience <br/>
          <span className='sn'>——</span> currently a student of <span className='sight'>Computer Engineering.</span>
        </Header>
      </motion.section>
    </Article>
  );
};

export default transition(About);
