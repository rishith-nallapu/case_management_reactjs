// clientsList.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar2 from './Navbar2';
import { toast, ToastContainer } from 'react-toastify';


const AdvocateBox = styled.div`
  border: 2px solid black;
  padding: 20px;
  margin: 20px 60px;
  border-radius: 8px;
`;

const Info = styled.div`
  border-sizing: border-box;
  margin: 40px auto;
  border: 2px solid black;
  background-color: #212529;
  border-radius: 8px;
  padding: 10px;
  width:500px;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 20px auto;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 2;
  width: 100%;
  padding: 8px;
  border: 3px solid #ccc;
  border-radius: 4px;
`;


const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin: 5px 0px;
  &:hover{
    background-color:#4caf50;
  }
`;

const DeclineButton = styled(Button)`
  background-color: #dc3545;
  border:2px solid white;

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

  const handleDeclineCase = async () => {
    try {
      if (!clientDetails || !clientDetails.clientEmail) {
        console.error('Invalid client details or email');
        return;
      }

      const emailResponse = await axios.post('http://localhost:5000/api/declined', {
        advocateUsername: username,
        clientUsername: clientDetails.clientUsername,
        to: clientDetails.clientEmail,
        subject: 'Advocate Declined Your Case',
        text: `Dear ${clientDetails.clientUsername},\n\nYour case has been declined by the advocate. Please choose another advocate for assistance.`,
      });

      if (emailResponse.data.success) {
        console.log('Decline email sent successfully');

        // Mark the case as declined on the backend

        // Clear client details to prevent it from being displayed again
        setClientDetails(null);

        // Show success toast notification
        toast.success('Case declined successfully!', { autoClose: 3000 }); // 3000 milliseconds (3 seconds)
      } else {
        console.error('Error sending decline email:', emailResponse.data.message);
        // Show error toast notification
        toast.error('Error sending decline email. Please try again.', { autoClose: 3000 });
      }
    } catch (error) {
      console.error('Error declining case:', error);
      // Show error toast notification
      toast.error('Error declining case. Please try again.', { autoClose: 3000 });
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
          // Show success toast notification
          toast.success('Case accepted successfully!', { autoClose: 3000 }); // 3000 milliseconds (3 seconds)
        } else {
          console.error('Error marking case as accepted on the backend:', markAcceptedResponse.data.message);
          // Show error toast notification
          toast.error('Error marking case as accepted on the backend. Please try again.', { autoClose: 3000 });
        }

        // Clear client details to prevent it from being displayed again
        setClientDetails(null);
      } else {
        console.error('Error sending email:', emailResponse.data.message);
        // Show error toast notification
        toast.error('Error sending email. Please try again.', { autoClose: 3000 });
      }
    } catch (error) {
      console.error('Error accepting case:', error);
      // Show error toast notification
      toast.error('Error accepting case. Please try again.', { autoClose: 3000 });
    }
  };
  return (
    <div>
      <Navbar2 />
      <Info>
        <Form onSubmit={handleCredentialsSubmit}>
          <FormGroup>
            <Label htmlFor="username">Enter Username:</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Enter Password:</Label>
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
      </Info>

      {clientDetails && (
        <div>
          <AdvocateBox>
            <h2>Client Details</h2> <br />
            <AdvocateBox>
              <h3>
                <strong>-) Name: </strong> {clientDetails.clientUsername}
              </h3>
              <h3>
                <strong>-) Case Overview: </strong> {clientDetails.caseOverview}
              </h3>
              <Button onClick={handleAcceptCase}>Accept Case</Button>
              <DeclineButton onClick={handleDeclineCase}>Decline Case</DeclineButton>
            </AdvocateBox>{' '}
            <br />
          </AdvocateBox>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ToastContainer />
    </div>
  );
};

export default ClientsList;
