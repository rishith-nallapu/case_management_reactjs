import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Navbar2 from './Navbar2';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 8px;
  margin-top: 20px;
`;

const AdvocateBox = styled.div`
  border: 2px solid black;
  padding: 30px;
  margin: 15px 5px;
  border-radius: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 3px solid #ccc;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const CaseDetails = styled.div`
  margin-top: 20px;
`;

const CaseDetailItem = styled.div`
  margin-bottom: 10px;
`;

const AcceptedComponent = () => {
  const [advocateUsername, setAdvocateUsername] = useState('');
  const [casesData, setCasesData] = useState([]);

  const handleFetchCases = async () => {
    try {
      // Fetch all cases for the advocate
      const response = await axios.get(`http://localhost:5000/api/cases/${advocateUsername}`);
      setCasesData(response.data);
    } catch (error) {
      console.error('Error fetching cases:', error);
      setCasesData([]);
    }
  };

  return (
    <div>
      <Navbar2 />
      <Container>
        <Title>Fetch CNR Numbers</Title>
        <Label htmlFor="advocateUsername">Advocate Username:</Label>
        <Input
          type="text"
          id="advocateUsername"
          value={advocateUsername}
          onChange={(e) => setAdvocateUsername(e.target.value)}
        />
        <Button onClick={handleFetchCases}>Fetch CNR Numbers</Button>

        {casesData.length > 0 && (
          <AdvocateBox>
            {casesData.map((caseItem) => (
              <CaseDetails key={caseItem.cnrNumber}>
                <AdvocateBox>
                <CaseDetailItem>
                   <h2>CNR number: {caseItem.cnrNumber}</h2> 
                </CaseDetailItem>
                <CaseDetailItem>
                  <strong>Plaintiff Name:</strong> {caseItem.plaintiffName}
                </CaseDetailItem>
                <CaseDetailItem>
                  <strong>Plaintiff Address:</strong> {caseItem.plaintiffAddress}
                </CaseDetailItem>
                <CaseDetailItem>
                  <strong>Plaintiff Mobile Number:</strong> {caseItem.pmobileNumber}
                </CaseDetailItem>
                <CaseDetailItem>
                  <strong>Defendant Name:</strong> {caseItem.defendantName}
                </CaseDetailItem>
                <CaseDetailItem>
                  <strong>Subject:</strong> {caseItem.subject}
                </CaseDetailItem>
                <CaseDetailItem>
                  <strong>Issuing Date:</strong> {caseItem.issuingDate}
                </CaseDetailItem>
                <CaseDetailItem>
                  <strong>Issuing Day:</strong> {caseItem.issuingDay}
                </CaseDetailItem>
                <CaseDetailItem>
                  <strong>Issuing Time:</strong> {caseItem.issuingTime}
                </CaseDetailItem>
                </AdvocateBox>
              </CaseDetails>
            ))}
          </AdvocateBox>
        )}
      </Container>
    </div>
  );
};

export default AcceptedComponent;
