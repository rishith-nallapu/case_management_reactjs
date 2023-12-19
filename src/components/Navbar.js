
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import image from './auction.png';


const Logo = styled.img`
  width: 50px; 
  height: auto; 
`;


const NavbarContainer = styled.nav`
// position:fixed;
    width:250px;
    height:100vh;
    background-color:#ffff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  justify-content: center; 
  align-items: center; 
`;


const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  padding: 0; 
  justify-content: space-around; 
  height: 100%; 
`;


const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;

  &:hover {
    // background-color:#4caf50;
    // border:2px solid #4caf50;
    // border-radius:5px;
    color:#3FFF00;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
      <Logo src={image} alt="#" className="img" />

        <NavItem>
          <NavLink to="/home">Dashborad</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact us</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
