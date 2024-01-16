// FirstPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import law from './justice 2.jpeg';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background-color: #212529;
  color: black;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
  margin-left: 30px;
`;

const Heading = styled.h4`
  font-size: 22px;
  margin-left: 20px;
  color: white;
`;

const ContentBox = styled.div`
  max-width: 850px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid #212529;
  border-radius: 8px;
  color:#081c15;
  background-color: #fff;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
`;

const ContentParagraph = styled.p`
  font-size: 16px;
  line-height: 2.5;
  color: #333;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-left: 50px;
  margin-right: 40px;
  cursor: pointer;

  &:hover {
    border-sizing: border-box;
    border: 2px solid white;
    border-radius: 8px;
    padding: 4px;
    background-color: white;
    color: black;
  }
`;

const CaseCountWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-bottom:30px;
`;

const CaseCountBox = styled.div`
  flex: 0;
  padding: 15px;
  border: 2px solid #212529;
  border-radius: 8px;
  margin-left: 20px;
  background-color: #fff;
  text-align: center;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
`;

const CaseCountTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  color: #212529;
`;

const CaseCountNumber = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #007bff; /* Change the color as needed */
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
`;

const Footer = styled.footer`
  background-color: #212529;
  color: white;
  padding: 10px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const pendingCivilCases = 100;
const pendingCriminalCases = 50;
const pendingFamilyCases = 30;


const FirstPage = () => {
  return (
    <div>
      <Navbar>
        <NavLink to="/secondpage">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={law} alt="law" />
            <Heading>E-Portal for Court Case Management</Heading>
          </div>
        </NavLink>


        <Navigation>
          <NavItem to="/about">About us</NavItem>
          <NavItem to="/contact">Contact Us</NavItem>
          <NavItem to="/landing">Login / Signup</NavItem>
        </Navigation>
      </Navbar>

      <ContentBox>
        <ContentParagraph>
          India's legal system, established by the Constitution in 1950, encompasses written laws, parliamentary acts, and judicial rulings.
          The Supreme Court, as the apex judicial body, oversees constitutional interpretation, while State High Courts and lower courts handle regional matters.
          Addressing civil, criminal, and constitutional issues, the legal framework is guided by principles of justice, equality, and fundamental rights.
          Rooted in a blend of British common law and indigenous influences, it reflects a diverse cultural heritage. The legal landscape is dynamic, adapting to contemporary challenges through digitization and advancements in technology, ensuring accessibility and transparency.
          The judiciary, with its power of judicial review, plays a crucial role in upholding the principles of the Constitution, fostering a just and equitable society.
        </ContentParagraph>
      </ContentBox>
      <CaseCountWrapper>
        <CaseCountBox>
          <CaseCountTitle>Pending Civil Cases</CaseCountTitle>
          <CaseCountNumber>{pendingCivilCases}</CaseCountNumber>
        </CaseCountBox>
        <CaseCountBox>
          <CaseCountTitle>Pending Criminal Cases</CaseCountTitle>
          <CaseCountNumber>{pendingCriminalCases}</CaseCountNumber>
        </CaseCountBox>
        <CaseCountBox>
          <CaseCountTitle>Pending Family Cases</CaseCountTitle>
          <CaseCountNumber>{pendingFamilyCases}</CaseCountNumber>
        </CaseCountBox>
      </CaseCountWrapper>
      <Footer>
        Designed and Developed by E-Portal Management
      </Footer>
    </div>
  );
};

export default FirstPage;
