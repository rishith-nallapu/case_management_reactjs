// clientsList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar2 from './Navbar2';

const AdvocateBox = styled.div`
  border: 2px solid black;
  padding: 20px;
  margin: 20px 40px;
`;

const Info = styled.div`
  border-sizing: border-box;
  margin:50px 30px;
  border: 2px solid black;
  border-radius:8px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 50px auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 3px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
`;

const ClientsList = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clientDetails, setClientDetails] = useState(null);
  const [error, setError] = useState('');

  const handleCredentialsSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/validate-advocate', {
        username,
        password,
      });

      if (response.data.success) {
        const response = await axios.get(`http://localhost:5000/api/client-details/${username}`);

        if (response.data.success) {
          setClientDetails(response.data.client);
          setError('');
        } else {
          setClientDetails(null);
          setError(response.data.message || 'No client details found.');
        }
      } else {
        setClientDetails(null);
        setError('Invalid credentials.');
      }
    } catch (error) {
      console.error('Error validating credentials:', error);
      setClientDetails(null);
      setError('Error validating credentials.');
    }
  };

  const handleAcceptCase = async () => {
    try {
      if (!clientDetails || !clientDetails.clientEmail) {
        console.error('Invalid client details or email');
        return;
      }

      const emailResponse = await axios.post('http://localhost:5000/api/accepted', {
        to: clientDetails.clientEmail,
        subject: 'Advocate Accepted Your Case',
        text: `Dear ${clientDetails.clientUsername},\n\nYour case has been accepted by the advocate. You can now proceed for case filing.`,
      });

      if (emailResponse.data.success) {
        console.log('Email sent successfully');

        // Mark the case as accepted on the backend
        const markAcceptedResponse = await axios.post(`http://localhost:5000/api/mark-case-accepted/${username}`);
        
        if (markAcceptedResponse.data.success) {
          console.log('Case marked as accepted on the backend');
        } else {
          console.error('Error marking case as accepted on the backend:', markAcceptedResponse.data.message);
        }

        // Clear client details to prevent it from being displayed again
        setClientDetails(null);
      } else {
        console.error('Error sending email:', emailResponse.data.message);
      }
    } catch (error) {
      console.error('Error accepting case:', error);
    }
  };



  return (
    <div>
      <Navbar2 />
    
        <Form onSubmit={handleCredentialsSubmit}>
          <FormGroup>
            <label htmlFor="username">Enter Username:</label>  
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /> 
          </FormGroup>  
          <FormGroup>
            <label htmlFor="password">Enter Password:</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>

        
          {clientDetails && (
            <div>
              <h2>Client Details</h2> <br />
              <AdvocateBox>
              <p>
                <strong>Name: </strong> {clientDetails.clientUsername}
              </p>
              <p>
                <strong>Case Overview: </strong> {clientDetails.caseOverview}
              </p>
              <Button onClick={handleAcceptCase}>Accept Case</Button>
              </AdvocateBox> <br />
            </div>
          )}
        

        {error && <p style={{ color: 'red' }}>{error}</p>}
   
    </div>
  );
};

export default ClientsList;
