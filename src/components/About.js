import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
border-sizing:border-box;
border:2px solid black;
  margin-left:30px;
  margin-right:30px;
  padding: 20px;
  color:#081c15;
`;

const Cont = styled.div`
  margin-top: 60px; 
  padding: 20px;
`;
const About = () => {
    return (
        <Cont>
            <Info>
                <h3>Welcome to our Court Case Management System – Your Trusted Partner in Legal Excellence!</h3> <br />

                <p>1) Efficient Case Management: Our system provides a centralized hub for managing cases, enabling legal professionals to organize, track, and collaborate seamlessly.</p>  <br />
                <p>2) Document Management: A robust document management system simplifies the handling of legal documents, ensuring secure storage and easy retrieval.</p>  <br />
                <p>3) User-Friendly Interface: Designed with simplicity in mind, our interface is intuitive, reducing the learning curve for users.</p>  <br />
                <p>4) Secure and Compliant: We prioritize the security and compliance of your legal data, implementing industry-standard security measures.</p> <br />
                <h4>Our mission is to revolutionize the legal landscape by providing an innovative and user-friendly platform that simplifies and enhances court case management. We are committed to delivering cutting-edge solutions that empower legal professionals and streamline the complexities of the legal process.</h4>
            </Info>
        </Cont>
    );
};

export default About;



