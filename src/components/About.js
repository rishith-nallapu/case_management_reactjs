
import React from 'react';
import styled from 'styled-components';


const AboutContainer = styled.div`
//   display:inline-block;
  background-color: #f0f0f0;
  padding: 20px;
`;

const About = () => {
    return (
        <div>
            <AboutContainer>
                <h2>About Page</h2> <br />
                <p>The e-Courts Integrated Mission Mode Project is a Government of India initiative to computerize district and subordinate courts. The project's goal is to improve access to justice through technology.The e-Filing services for online filing of cases include: Filing cases, Uploading pleadings,Portfolio management.
                </p>
            </AboutContainer>
        </div>
    );
};

export default About;
