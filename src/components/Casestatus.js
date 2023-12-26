import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';



const Info = styled.p`
border-sizing:border-box;
border:2px solid black;
  margin-left:10px;
  margin-right:10px;
  padding: 15px;
`;

const Casestatus = () => {
  return (
    <div>
      <Navbar />
      <Info>
        </Info>
    </div>
  );
};

export default Casestatus;




