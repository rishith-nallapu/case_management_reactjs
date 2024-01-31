import React from 'react';
import styled from 'styled-components';
import register1 from './register1.png';
import register2 from './register2.png';
import register3 from './register3.png';
import register4 from './register4.png';
import client2 from './client2.png'


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

const Guide3 = () => {
    return (
        <Container>
            <Heading>--- Guidelines  for Registrars ---</Heading>   <br />  <br />

            <Image src={register4} alt="Image" />
            <Info>

                <Description>
                    1) In the  registration section, you can sign up for the website to receive cases to handle.
                </Description>
            </Info>    <br />
            <Image src={client2} alt="Image" />
            <Info>

                <Description>
                    2) In the "Forgot Password" section, you can reset your password by providing the necessary details as requested.
                </Description>
            </Info>  <br />  <br />
            <Image src={register1} alt="Image" />
            <Info>

                <Description>

                    3) In the "Cases List" section, you have the capability to select cases based on their respective districts and then assign a CNR (Case Number Record) to them.    </Description>          </Info>  <br /> <br />

            <Image src={register2} alt="Image" />
            <Info>

                <Description>
                    4) In the "Issue Dates" section, you can assign dates to cases based on their corresponding CNR (Case Number Record) numbers.   </Description>           </Info>   <br />
            <Info>

                <Description>
                    <Image src={register3} alt="Image" />
                    <Info>

                        <Description>
                            1)
                            In the "Pending Cases" section, you can view cases that have been assigned CNR (Case Number Record) numbers, and you have the capability to adjust their progress levels.
                        </Description>
                    </Info>    <br />


                    5) In the "Pretrial" section, you can schedule a Google Meet for the pretrial conference involving parties, judges, and advocates.
                </Description>
            </Info>   <br />
        </Container>
    );
}

export default Guide3;
