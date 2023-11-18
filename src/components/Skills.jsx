import React from 'react';
import styled from 'styled-components';
import transition from '../transition';
import { motion } from 'framer-motion';
import { MdCode, MdImportantDevices } from "react-icons/md";
import { SiRobotframework } from "react-icons/si";
import { VscDebugAll } from "react-icons/vsc";
import { TbWorldSearch } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import { PiShareNetworkThin } from "react-icons/pi";

const ParentGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 20px;
  justify-content: center;
`;

const Div = styled.div`
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s; /* Add box-shadow to the transition */
  h2 , p{
  font-family: 'NeueRegular', sans-serif;
  font-weight: normal;
  line-height: 0.94;
  letter-spacing: -1.0px;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Add box-shadow on hover */
  }
`;


const Title = styled.section`
  display:flex;
  justify-content: center;
  height: 75px;
  
  h1{
  margin: 25px;
  padding: 0;
  font-size: 4vw;
  line-height: 0.94;
  letter-spacing: -1.5px;

  font-weight: normal;
  }

  .sight {
    color: #FF5600;
  }
`;

const Skills = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 200,
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
    <main>
      <Title>
        <h1>My <span className='sight'>Pixel</span> Perfect <span className='sight'>skills</span> </h1>
      </Title>
      <ParentGrid>
        <Div>
          <MdCode size={48} color="#FF5600" />
          <h2>Coding</h2>
          <p>Proficient in JavaScript, HTML, CSS, and various web development frameworks.</p>
        </Div>
        <Div>
          <SiRobotframework size={48} color="#FF5600" />
          <h2>Coding Frameworks</h2>
          <p>Experienced in working with popular web development frameworks.</p>
        </Div>
        <Div>
          <VscDebugAll size={48} color="#FF5600" />
          <h2>Testing and Debugging</h2>
          <p>Skilled in testing and debugging web applications to ensure quality.</p>
        </Div>
        <Div>
          <TbWorldSearch size={48} color="#FF5600" />
          <h2>SEO</h2>
          <p>Knowledgeable in search engine optimization techniques for better web visibility.</p>
        </Div>
        <Div>
          <BsGit size={48} color="#FF5600" />
          <h2>Version Control</h2>
          <p>Proficient in Git and version control practices.</p>
        </Div>
        <Div>
          <FaUserCheck size={48} color="#FF5600" />
          <h2>UI/UX</h2>
          <p>Focused on creating user-friendly and intuitive web interfaces.</p>
        </Div>
        <Div>
          <MdImportantDevices size={48} color="#FF5600" />
          <h2>Responsive Design</h2>
          <p>Experienced in designing responsive web layouts for various devices.</p>
        </Div>
        <Div>
          <PiShareNetworkThin  size={48} color="#FF5600" />
          <h2>Network Connection</h2>
          <p>Understanding of network protocols and web connectivity.</p>
        </Div>
      </ParentGrid>
    </main>
    </motion.div>
  );
};

export default transition(Skills);



