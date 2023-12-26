
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #3B3C36;
  padding: 25px;
  position: fixed;
  width: 100%;
  height:75px;
  top: 0;
  left:0;
  z-index: 1000;
`;
const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content:space-evenly;

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
    color: #4caf50;
    box-sizing:border-box;
    background-color:white;
    border:1px solid white;
    padding:8px;
    border-radius:20px;
  }
`;

const Button = styled(Link)`
  width: 100px;
  height:35px;
  background-color: #4caf50;
  color: #fff;
  padding: 5px 22px;
  border:none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    background-color:red;
    color:white;
  }
`;

const ContentBelow = styled.div`
  margin-top: 40px; 
  padding: 20px;
`;

const Navbar3 = ({children}) => {
  
  return (
    <>
      <NavbarContainer>
        <NavbarList>
          <NavbarItem>
          <NavbarLink to="/caseslist" >
             Cases list
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
          <NavbarLink to="/judgeslist" >
             Judges list
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
          <NavbarLink to="/messages" >
              Messages
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
          <NavbarLink to="/pending" >
              Pending cases
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
          <Button to="/login3">Logout</Button>
        </NavbarList>
      </NavbarContainer>
      <ContentBelow>{children}</ContentBelow>
    </>
  );
};

export default Navbar3;
