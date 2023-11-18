import React from 'react';
import styled from 'styled-components';
import transition from '../transition';

const FooterContainer = styled.footer`
width: 100%;
  position: relative;
`;

const Nav = styled.nav`
max-width: 750px;
margin: 0 auto;
`;

const Order = styled.ul `
display: flex;
list-style: none;
margin: 0;
padding: 0;

`;

const ListItem = styled.li`
  margin-right: 4.5rem;
`;

const Link = styled.a`
  font-size: 18px;
  color: #7A7A7A;
  text-decoration: none;

  &:hover {
    color: ${props => props.hovercolor};
  }
`;

const DesignAuthor = styled.address`
  position: absolute;
  bottom: 210%;
  right: -4%;
  font-style: normal;
  font-size: 0.6rem;

  transform: rotate3d(0, 0, 1, 270deg);
  transition: 190ms linear;

  a {
   color: #FF5600;
    text-decoration: none;
  }

  &:hover {
    opacity: 3;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Nav>
        <Order>
          <ListItem>
            <Link className="in" target="_blank" href="https://www.linkedin.com/in/randel-joshua-tan-200505263/" hovercolor="#0579F0">linkedin</Link>
          </ListItem>
          <ListItem>
            <Link className="git" target="_blank" href="https://github.com/TanRandel" hovercolor="rgb(89, 185, 246)">github</Link>
          </ListItem>
          <ListItem>
            <Link className="mail" target="_blank" href="mailto:randeljoshuatan@gmail.com" hovercolor="#F2392C">e-mail</Link>
          </ListItem>
        </Order>
      </Nav>
      <DesignAuthor><a target="_blank" href="https://github.com/TanRandel">Design by Randel Tan</a></DesignAuthor>
    </FooterContainer>
  );
}

export default  transition(Footer);
