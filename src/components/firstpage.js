import React from 'react';
import image from './mine.jpeg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
background-image: url(${image});
  background: linear-gradient(20,20,0.4); 
  background-size:cover;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  font-size:16px;
  align-items: center;
  padding: 20px;
`;

const ContentBox = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
  width: 40%;
  &:hover{
    background-color:#1E90FF;
    color:white;
    border:2px solid black;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  
`;

const Button = styled(Link)`
  width: 120px;
  height:50px;
  background-color: orange; 
  color: white; 
  padding: 12px 21px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  

  &:hover {
    background-color: #4caf50; 
    color: #fff; 
  }
`;

const Firstpage = () => {
    return (
        <Container>
            <ContentBox>
                <Paragraph>
                    India's legal system is rooted in the Constitution, adopted in 1950. The system comprises written laws, parliamentary enactments, and judicial decisions. The Supreme Court is the apex judicial body, overseeing constitutional interpretation. State High Courts and lower courts handle regional matters. India's legal framework addresses civil, criminal, and constitutional issues, guided by principles of justice, equality, and fundamental rights. The legal system reflects a mix of British common law and indigenous influences.
                </Paragraph>
            </ContentBox>
            <Button to="/landing">Welcome</Button>
        </Container>
    );
};

export default Firstpage;
