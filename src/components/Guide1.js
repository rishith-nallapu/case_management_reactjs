import React from 'react';
import styled from 'styled-components';
import client1 from './client1.png';
import client2 from './client2.png';
import client3 from './client3.png';
import client4 from './client4.png';


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

const Guide1 = () => {
    return (
        <Container>
            <Heading>--- Guidelines  for  clients ---</Heading>   <br />  <br />

            <Image src={client1} alt="Image" />
            <Info>

                <Description>
                    1) In the client registration section, please specify whether you are registering as a plaintiff or defendant. This information will allow us to appropriately handle your case. Additionally, you will have the option to choose an advocate to represent you, you will be able to file a case and you can check your casestatus using the CNR number.
                </Description>
            </Info>    <br />
            <Image src={client2} alt="Image" />
            <Info>

                <Description>
                    2) In the "Forgot Password" section, you can reset your password by providing the necessary details as requested.
                </Description>
            </Info>  <br />  <br />
            <Image src={client3} alt="Image" />
            <Info>

                <Description>

                    3) By clicking on the logo, you can log out of your account.</Description>
            </Info>  <br /> <br />

            <Image src={client4} alt="Image" />
            <Info>

                <Description>
                    4) You can select an advocate based on your district or opt for someone who is well-versed and experienced in the relevant field of law.                </Description>
            </Info>   <br />
            <Info>

                <Description>

                    5) You can upload documents in the documents section to provide evidence during the trial.
                </Description>
            </Info>   <br />
        </Container>
    );
}

export default Guide1;
