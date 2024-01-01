import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 25px;
  position: fixed;
  width: 100%;
  height: 75px;
  top: 0;
  z-index: 1000;
`;

const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
`;

const NavbarItem = styled.li`
  margin-right: 15px;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    border-sizing:border-box;
    padding:8px;
    border-radius:30px;
    background-color:white;
    color: #4caf50;
  }
`;

const Button = styled(Link)`
  width: 100px;
  height: 35px;
  background-color: #4caf50;
  color: #fff;
  padding: 5px 22px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const ContentBelowNavbar = styled.div`
  margin-top: 60px; 
  padding: 20px;
`;

const Navbar = ({ children }) => {
  return (
    <>
      <NavbarContainer>
        <NavbarList>
          <NavbarItem>
            <NavbarLink to="/casestatus" >
              Case status
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/uploads" >
              Documents
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/advocateslist" >
              Advocates list
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/messages" >
              Messages
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/about" >
              About us
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink to="/contact" >
              Contact Us
            </NavbarLink>
          </NavbarItem>
          <Button to="/landing">Logout</Button>
        </NavbarList>
      </NavbarContainer>
      <ContentBelowNavbar>{children}</ContentBelowNavbar>
    </>
  );
};

export default Navbar;