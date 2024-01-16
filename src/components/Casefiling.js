import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from './Navbar';

const FormWrapper = styled.div`
  width: 700px;
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

const StyledSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
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
    district:'',
    plaintiffName: '',
    plaintiffFatherOrMotherName: '',
    plaintiffAge: '',
    plaintiffCaste: '',
    plaintiffAdvocate: '',
    defendantName: '',
    defendantFatherOrMotherName: '',
    defendantAge: '',
    defendantCaste: '',
    dmobileNumber:'',
    pmobileNumber:'',
    plaintiffAddress:'',
    defendantAddress:'',
    subject: '',
    filingDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make an API call to store the form data in the database
      await axios.post('http://localhost:5000/api/cases', formData);
  
      console.log('Form submitted:', formData);
      alert('Case filed successfully!');
  
      // Reset the form after successful submission
      setFormData({
        caseType: '',
        district: '',
        plaintiffName: '',
        plaintiffFatherOrMotherName: '',
        plaintiffAge: '',
        plaintiffCaste: '',
        plaintiffAdvocate: '',
        defendantName: '',
        defendantFatherOrMotherName: '',
        defendantAge: '',
        defendantCaste: '',
        dmobileNumber: '',
        pmobileNumber: '',
        plaintiffAddress: '',
        defendantAddress: '',
        subject: '',
        filingDate: '',
      });
    } catch (error) {
      console.error('Error filing case:', error);
      alert('Error filing case. Please try again.');
    }
  };
  


  return (
    <>
      <Navbar />
      <FormWrapper>
        <h2>Electronic Case Filing</h2> <br />
        <form onSubmit={handleSubmit}>
          <FormSection>
            <Label>District</Label>
            <StyledSelect
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">Select Districts</option>
              <option value="adilabad">Adilabad</option>
              <option value="bhadradri">Bhadradri</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="jagitial">Jagitial</option>
              <option value="jayashankar">Jayashankar</option>
              <option value="jogulamba">Jogulamba</option>
              <option value="kamareddy">Kamareddy</option>
              <option value="karimnagar">Karimnagar</option>
              <option value="khammam">Khammam</option>
              <option value="komarambheem">Komaram Bheem</option>
              <option value="mahabubabad">Mahabubabad</option>
              <option value="mahabubnagar">Mahabubnagar</option>
              <option value="mancherial">Mancherial</option>
              <option value="medak">Medak</option>
              <option value="medchal">Medchal</option>
              <option value="nagarkurnool">Nagarkurnool</option>
              <option value="nalgonda">Nalgonda</option>
              <option value="nirmal">Nirmal</option>
              <option value="nizamabad">Nizamabad</option>
              <option value="peddapalli">Peddapalli</option>
              <option value="rajanna">Rajanna</option>
              <option value="rangareddy">Rangareddy</option>
              <option value="sangareddy">Sangareddy</option>
              <option value="siddipet">Siddipet</option>
              <option value="suryapet">Suryapet</option>
              <option value="vikarabad">Vikarabad</option>
              <option value="wanaparthy">Wanaparthy</option>
              <option value="warangalurban">Warangal Urban</option>
              <option value="warangalrural">Warangal Rural</option>
              <option value="yadadri">Yadadri</option>
            </StyledSelect>
          </FormSection>

          <FormSection>
            <Label>Case Type:</Label>
            <Select name="caseType" value={formData.caseType} onChange={handleChange} required>
              <option value="">Select Case Type</option>
              <option value="civil">Civil</option>
              <option value="criminal">Criminal</option>
              <option value="family">Family</option>
            </Select>
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
            <Label>Plaintiff Father/Mother Name:</Label>
            <Input
              type="text"
              name="plaintiffFatherOrMotherName"
              value={formData.plaintiffFatherOrMotherName}
              onChange={handleChange}
              placeholder="Enter Father/Mother Name"
              required
            />
          </FormSection>

          <FormSection>
            <Label>Plaintiff Address:</Label>
            <TextArea
              name="plaintiffAddress"
              value={formData.plaintiffAddress}
              onChange={handleChange}
              placeholder="Enter Plaintiff Address"
              rows="4"
              required
            />
          </FormSection>

          <FormSection>
            <Label>Plaintiff Age:</Label>
            <Input
              type="number"
              name="plaintiffAge"
              value={formData.plaintiffAge}
              onChange={handleChange}
              required
            />
          </FormSection>

          <FormSection>
            <Label>Plaintiff Caste:</Label>
            <Input
              type="text"
              name="plaintiffCaste"
              value={formData.plaintiffCaste}
              onChange={handleChange}
              placeholder="Enter Plaintiff Caste"
              required
            />
          </FormSection>

          <FormSection>
            <Label>Mobile Number:</Label>
            <Input
              type="tel"
              name="pmobileNumber"
              pattern="[0-9]{10}"
              value={formData.pmobileNumber}
              onChange={handleChange}
              required
            />
          </FormSection>

          <FormSection>
            <Label>Plaintiff Advocate:</Label>
            <Input
              type="text"
              name="plaintiffAdvocate"
              value={formData.plaintiffAdvocate}
              onChange={handleChange}
              placeholder="Enter Plaintiff Advocate"
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
            <Label>Defendant Father/Mother Name:</Label>
            <Input
              type="text"
              name="defendantFatherOrMotherName"
              value={formData.defendantFatherOrMotherName}
              onChange={handleChange}
              placeholder="Enter Father/Mother Name"
              required
            />
          </FormSection>

          <FormSection>
            <Label>Defendant Address:</Label>
            <TextArea
              name="defendantAddress"
              value={formData.defendantAddress}
              onChange={handleChange}
              placeholder="Enter Defendant Address"
              rows="4"
              required
            />
          </FormSection>

          <FormSection>
            <Label>Defendant Age:</Label>
            <Input
              type="number"
              name="defendantAge"
              value={formData.defendantAge}
              onChange={handleChange}
              required
            />
          </FormSection>

          <FormSection>
            <Label>Defendant Caste:</Label>
            <Input
              type="text"
              name="defendantCaste"
              value={formData.defendantCaste}
              onChange={handleChange}
              placeholder="Enter defendant Caste"
              required
            />
          </FormSection>

          <FormSection>
            <Label>Mobile Number:</Label>
            <Input
              type="tel"
              name="dmobileNumber"
              pattern="[0-9]{10}"
              value={formData.dmobileNumber}
              onChange={handleChange}
              required
            />
          </FormSection>

          <FormSection>
            <Label>Subject</Label>
            <TextArea
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder=""
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


