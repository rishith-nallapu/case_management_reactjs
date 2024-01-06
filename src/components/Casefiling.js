import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar2 from './Navbar2';

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid black;
  border-radius: 8px;
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const CaseFiling = () => {
  const [formData, setFormData] = useState({
    caseType: '',
    caseNumber: '',
    plaintiffName: '',
    defendantName: '',
    caseDescription: '',
    filingDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Navbar2/>
    <FormWrapper>
      <h2>Electronic Case Filing</h2> <br />
      <form onSubmit={handleSubmit}>
        <FormSection>
          <Label>Case Type:</Label>
          <Select name="caseType" value={formData.caseType} onChange={handleChange} required>
            <option value="">Select Case Type</option>
            <option value="civil">Civil</option>
            <option value="criminal">Criminal</option>
            {/* Add more case types as needed */}
          </Select>
        </FormSection>

        <FormSection>
          <Label>Case Number:</Label>
          <Input
            type="text"
            name="caseNumber"
            value={formData.caseNumber}
            onChange={handleChange}
            placeholder="Enter Case Number"
            required
          />
        </FormSection>

        <FormSection>
          <Label>Plaintiff Name:</Label>
          <Input
            type="text"
            name="plaintiffName"
            value={formData.plaintiffName}
            onChange={handleChange}
            placeholder="Enter Plaintiff Name"
            required
          />
        </FormSection>

        <FormSection>
          <Label>Mobile Number:</Label>
          <Input
            type="tel"
            name="mobileNumber"
            pattern="[0-9]{10}"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </FormSection>

        <FormSection>
          <Label>Defendant Name:</Label>
          <Input
            type="text"
            name="defendantName"
            value={formData.defendantName}
            onChange={handleChange}
            placeholder="Enter Defendant Name"
            required
          />
        </FormSection>

        <FormSection>
          <Label>Mobile Number:</Label>   
          <Input
            type="tel"
            name="mobileNumber"
            pattern="[0-9]{10}"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </FormSection>

        <FormSection>
          <Label>Case Description:</Label>
          <TextArea
            name="caseDescription"
            value={formData.caseDescription}
            onChange={handleChange}
            placeholder="Case Description"
            rows="4"
            required
          />
        </FormSection>

        <FormSection>
          <Label>Filing Date:</Label>
          <Input
            type="date"
            name="filingDate"
            value={formData.filingDate}
            onChange={handleChange}
            required
          />
        </FormSection>

        <Button type="submit">File Case</Button>
      </form>
    </FormWrapper>
    </>
  );
};

export default CaseFiling;


