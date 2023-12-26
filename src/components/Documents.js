import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Info = styled.div`
border-sizing:border-box;
border:2px solid black;
  margin-left:10px;
  margin-right:10px;
  padding: 15px;
`;
const Documents = () => {
  return (
    <div>
      <Navbar/>
      <Info>
      </Info>
    </div>
  );
};

export default Documents;
