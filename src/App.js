import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/loginpage'; 
import Signup from './components/signup'; 

// import AdvocatesList from './components/AdvocatesList';

import Navbar from './components/Navbar';

const LayoutContainer = styled.div`
  display: flex;
`;

const NavbarContainer = styled.div`
  flex-shrink: 0;
  flex-basis: 200px;
  background-color: #333;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const StyledHome = styled.div`
  /* Add styles specific to the Home component */
  background-color: #f0f0f0;
  padding: 20px;
`;

const StyledAbout = styled.div`
  /* Add styles specific to the About component */
  background-color: #e0e0e0;
  padding: 20px;
`;

const StyledContact = styled.div`
  /* Add styles specific to the Contact component */
  background-color: #d0d0d0;
  padding: 20px;
`;

// const StyledAdvocatesList = styled.div`
//   /* Add styles specific to the AdvocatesList component */
//   background-color: #c0c0c0;
//   padding: 20px;
// `;

const StyledLogin = styled.div`
  /* Add styles specific to the Login component */
  background-color: #b0b0b0;
  padding: 20px;
`;

const StyledSignup = styled.div`
  /* Add styles specific to the Signup component */
  background-color: #a0a0a0;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutContainer>
              <NavbarContainer>
                <Navbar />
              </NavbarContainer>
              <ContentContainer>
                <Outlet />
              </ContentContainer>
            </LayoutContainer>
          }
        />
          <Route path="/login" element={<StyledLogin><Login /></StyledLogin>} />
          <Route index element={<StyledHome><Home /></StyledHome>} />
          <Route path="/about" element={<StyledAbout><About /></StyledAbout>} />
          <Route path="/contact" element={<StyledContact><Contact /></StyledContact>} />
          {/* <Route path="/advocatelist" element={<StyledAdvocatesList><AdvocatesList /></StyledAdvocatesList>} /> */}
          <Route path="/signup" element={<StyledSignup><Signup /></StyledSignup>} />
        
      </Routes>
    </Router>
  );
}

export default App;
