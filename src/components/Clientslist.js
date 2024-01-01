import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar2 from './Navbar2';

const Info = styled.div`
  border-sizing: border-box;
  border: 2px solid black;
  margin-left: 10px;
  margin-right: 10px;
  padding: 15px;
`;

const ClientsList = () => {
    return (
        <div>
            <Navbar2 />
            <Info>
                

            </Info>
        </div>
    );
};

export default ClientsList;
