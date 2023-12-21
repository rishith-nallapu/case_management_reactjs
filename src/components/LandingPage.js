import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import clientImage from './user.png';
import advocateImage from './person.png';
import registrarImage from './profile.png';

const LandingContainer = styled.div`
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const LogoButton = styled(Link)`
  display: block;
  background-color: #4caf50;
  color: #fff;
  padding: 20px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  &:hover{
    background-color:red;
    color:white;
  }
`;

const LandingPage = () => {
  return (
    <LandingContainer>
      <Column>
        <Image src={clientImage} alt="Client" />
        <LogoButton to="/login">Client</LogoButton>
      </Column>

      <Column>
        <Image src={advocateImage} alt="Advocate" />
        <LogoButton to="/login">Advocate</LogoButton>
      </Column>

      <Column>
        <Image src={registrarImage} alt="Registrar" />
        <LogoButton to="/login">Registrar</LogoButton>
      </Column>
    </LandingContainer>
  );
};

export default LandingPage;
