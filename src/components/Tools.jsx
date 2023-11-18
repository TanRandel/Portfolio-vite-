import React from 'react'
import styled from 'styled-components'
import transition from '../transition';
import { motion } from 'framer-motion';
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoTailwindCss , BiLogoGithub } from "react-icons/bi";
import { SiJavascript} from "react-icons/si";
import { TbBrandVscode} from "react-icons/tb";
import { FaReact} from "react-icons/fa";

const ParentGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
 
  
`;

const Div = styled.div`
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  height: 230px;
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

const Tools = () => {
  const parentGridVariants = {
    hidden: {
      opacity: 0,
      x: -200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      variants={parentGridVariants}
      initial="hidden"
      animate="visible"
    >
    <main>
      <Title>
      <h1>My <span className='sight'>Tech</span> Perfect <span className='sight'>Tools</span> </h1>
      </Title>
      <ParentGrid>
        <Div>
          <AiFillHtml5 size={48} color="#FF5600" />
          <h2>HTML</h2>
          <p>HTML serves as the bedrock of web development, enabling me to architect web pages and structure content with precision.</p>
        </Div>
        <Div>
          <IoLogoCss3 size={48} color="#FF5600" />
          <h2>CSS</h2>
          <p>CSS is my artistic toolkit, allowing me to craft captivating and responsive user interfaces with aesthetic finesse.</p>
        </Div>
        <Div>
          <SiJavascript size={48} color="#FF5600" />
          <h2>JavaScript</h2>
          <p>JavaScript empowers me to infuse interactivity into web applications, creating dynamic, engaging user experiences.</p>
        </Div>
        <Div>
          <FaReact size={48} color="#FF5600" />
          <h2>ReactJS</h2>
          <p>ReactJS, a premier library for UI development, is my choice for building efficient, reusable, and feature-rich user interfaces.</p>
        </Div>
        <Div>
          <BiLogoTailwindCss size={48} color="#FF5600" />
          <h2>TailwindCSS</h2>
          <p>TailwindCSS, a utility-first framework, streamlines my styling process, ensuring consistent design systems and efficient development.</p>
        </Div>
        <Div>
          <BiLogoGithub size={48} color="#FF5600" />
          <h2>GitHub</h2>
          <p>GitHub is my cornerstone for version control, facilitating collaborative coding, code repository management, and meticulous version tracking.</p>
        </Div>
        <Div>
          <TbBrandVscode size={48} color="#FF5600" />
          <h2>VScode</h2>
          <p>VScode is my trusted code editor, the central hub for proficiently writing, debugging, and organizing my web development projects.</p>
        </Div>
      </ParentGrid>
    </main>
    </motion.div>
  );
};

export default transition(Tools);
