import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #212529;
  padding: 28px;
  position: fixed;
  width: 100%;
  height: 85px;
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
  font-size: 18px;

  &:hover {
    border-sizing:border-box;
    padding:8px;
    border-radius:8px;
    background-color:white;
    color: black;
  }
`;

const Button = styled(Link)`
  width: 100px;
  height: 35px;
  background-color: #4caf50;
  color: #fff;
  padding: 4px 22px;
  border: none;
  border-radius: 8px;
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
            <NavbarLink to="/casefiling" >
              Case filing
            </NavbarLink>
          </NavbarItem>
          <Button to="/">Logout</Button>
        </NavbarList>
      </NavbarContainer>
      <ContentBelowNavbar>{children}</ContentBelowNavbar>
    </>
  );
};

export default Navbar;