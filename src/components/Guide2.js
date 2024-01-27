import React from 'react';
import styled from 'styled-components';
import advocate1 from './advocate1.png';
import advocate2 from './advocate2.png';
import advocate3 from './advocate3.png';
import client2 from './client2.png';


const Container = styled.div`
border:2px solid black;
margin:60px;
padding:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 300px; 
  height: auto;
  margin-bottom: 20px;
`;

const Info = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
`;

const Guide2 = () => {
    return (
        <Container>
            <Heading>--- Guidelines  for  Advocates ---</Heading>   <br />  <br />

            <Image src={advocate3} alt="Image" />
            <Info>

                <Description>
                    1) In the advocate registration section, you can sign up for the website to receive cases to handle.
                </Description>
            </Info>    <br />
            <Image src={client2} alt="Image" />
            <Info>

                <Description>
                    2) In the "Forgot Password" section, you can reset your password by providing the necessary details as requested.
                </Description>
            </Info>  <br />  <br />
            <Image src={advocate2} alt="Image" />
            <Info>

                <Description>

                3) In the Clients section, you can view the clients who are interested in approaching you for their case. You can then accept or decline the case by reviewing the case overview.    </Description>          </Info>  <br /> <br />

            <Image src={advocate1} alt="Image" />
            <Info>

                <Description>
                4) In the Accepted Cases section, you can view the cases that you have accepted. You can mark them as completed to remove them from appearing on your dashboard once they are finished.   </Description>           </Info>   <br />
            <Info>

                <Description>

                    5) You can upload documents in the documents section to provide evidence during the trial.
                </Description>
            </Info>   <br />
        </Container>
    );
}

export default Guide2;
