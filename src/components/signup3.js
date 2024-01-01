import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

const AppContainer = createGlobalStyle`
body{
background: linear-gradient(to right, #08203e, #557c93);
background-size: cover;
}
`;
const RegistrationFormWrapper = styled.div`
background-color: #F2F3F4;

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

const RadioWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
`;

const RadioLabel = styled.label`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  background-color:  #4caf50;
  border:2px solid white;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius:10px;
`;

const Signup3 = () => {

 

  const [formData, setFormData] = useState({
    state: '',
    barRegistrationNumber: '',
    username: '',
    dateOfBirth: '',
    gender: '',
    courtType: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
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
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error during registration:', error);
    }

    window.location.href='/login3'
  };


  return (
    <>
    <AppContainer/>
    <RegistrationFormWrapper>
      <h2>Registrar Registration</h2>
      <br />
      <form onSubmit={handleSubmit}>
      <FormSection>
          <Label>State:</Label>
          <Input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </FormSection>

        <FormSection>
          <Label>Name:</Label>
          <Input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </FormSection>

        <FormSection>
          <Label>Date of Birth:</Label>
          <Input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </FormSection>

        <FormSection>
          <Label>Gender:</Label>
          <RadioWrapper>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                required
              />
              Male
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                required
              />
              Female
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                required
              />
              Other
            </RadioLabel>
          </RadioWrapper>
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
          <Label>Password:</Label>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </FormSection>

        <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
      </form>
    </RegistrationFormWrapper>
    </>
  );
};

export default Signup3;
