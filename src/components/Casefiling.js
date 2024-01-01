// src/components/CaseForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  margin-top: 50px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;

const CaseForm = () => {

  const [caseTitle, setCaseTitle] = useState('');
  const [caseDescription, setCaseDescription] = useState('');

  const handleSubmit = () => {
   window.location.href='/casefiling'
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Case Title"
        value={caseTitle}
        onChange={(e) => setCaseTitle(e.target.value)}
      />
      <TextArea
        placeholder="Case Description"
        value={caseDescription}
        onChange={(e) => setCaseDescription(e.target.value)}
      />
      <Button onClick={handleSubmit}>File Case</Button>
    </Container>
  );
};

export default CaseForm;

