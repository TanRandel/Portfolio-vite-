import React from 'react';
import styled from 'styled-components';
import transition from '../transition';
import { NavLink } from 'react-router-dom';
const HeaderContainer = styled.header`
  width: 100%;
`;

const Container = styled.section`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  color: #7A7A7A;
  font-weight: lighter;
  
  
`;

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  opacity: 0.55;
  font-weight: normal;
`;

const Description = styled.span`
  font-size: 0.9rem;
  margin-right: 0.1rem;
  font-weight: normal;
`;

const Icon = styled.i`
  font-size: 1.4rem;
  line-height: 0;
  vertical-align: middle;
  font-weight: normal;
  font-style: normal;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;
  }
  li {
    a {
      font-family: 'NeueRegular', sans-serif;
      font-weight: normal;
      text-decoration: none;
      color: #7A7A7A;

      &:hover {
        
        transform: scale(1.05);
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        color: #FF5600;
      }
      &.active{
        color: #FF5600;
      }
      
     
    }
  }
`;


const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Paragraph>
          <Description>Randel Joshua Tan</Description> <Icon>PH</Icon>
        </Paragraph>
        <Nav>
        <ul>
        <li>
        <NavLink to="/">About</NavLink>
        </li>
        <li>
        <NavLink to="/works">Works</NavLink>
        
        </li>
        <li>
        <NavLink to="/skills">Expertise</NavLink>
        </li>
        <li>
        <NavLink to="/tools">Tools</NavLink>
        </li>
        </ul>
      </Nav>
      </Container>
      
    </HeaderContainer>
  );
}

export default transition(Header);

