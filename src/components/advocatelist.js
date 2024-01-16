import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Navbar from './Navbar';

const AdvocateBox = styled.div`
  border: 2px solid black;
  padding: 20px;
  margin-bottom: 20px;
`;

const Info = styled.div`
  border-sizing: border-box;
  margin-left: 50px;
  margin-right: 50px;
  padding: 15px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:hover{
    background-color:red;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const AdvocatesList = () => {
  const [advocates, setAdvocates] = useState([]);
  const [selectedAdvocate, setSelectedAdvocate] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    caseOverview: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch the list of advocates from your API
    const fetchAdvocates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/advocates'); // Replace with your API endpoint
        setAdvocates(response.data);
      } catch (error) {
        console.error('Error fetching advocates:', error);
      }
    };

    fetchAdvocates();
  }, []);

  const handleSelectAdvocate = (advocate) => {
    setSelectedAdvocate(advocate);
    setShowModal(true);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save client details to the clientslist collection
      const response = await axios.post('http://localhost:5000/api/clientslist', {
        advocateUsername: selectedAdvocate.username,
        clientUsername: formData.username,
        clientEmail: formData.email,
        caseOverview: formData.caseOverview,
      });

      if (response.data.success) {
        console.log('Client details saved successfully.');
        // Optionally, you can reset the form and selected advocate state here
        setFormData({
          username: '',
          email: '',
          caseOverview: '',
        });
        setSelectedAdvocate(null);
        setShowModal(false);
      } else {
        console.error('Error saving client details:', response.data.message);
      }
    } catch (error) {
      console.error('Error saving client details:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Info>
        {advocates.map((advocate) => (
          <AdvocateBox key={advocate._id}>
            <p>
              <strong>Name: </strong> {advocate.username}
            </p>
            <p>
              <strong>Years of Experience: </strong> {advocate.yearsOfExperience}
            </p>
            <p>
              <strong>Cases Dealt With: </strong> {advocate.casesDealtWith}
            </p>
            <p>
              <strong>State: </strong> {advocate.state}
            </p> <br />
            <Button onClick={() => handleSelectAdvocate(advocate)}>Choose</Button>
          </AdvocateBox>
        ))}

        {/* Modal for entering client details */}
        {showModal && selectedAdvocate && (
          <ModalOverlay>
            <Modal>
              <form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <label htmlFor="username">Your Registered Username:</label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleFormChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="email">Your Registered Email:</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="caseOverview">Case Overview:</label>
                  <Input
                    type="text"
                    id="caseOverview"
                    name="caseOverview"
                    value={formData.caseOverview}
                    onChange={handleFormChange}
                    required
                  />
                </FormGroup>
                <Button type="submit">Submit</Button>
              </form>
            </Modal>
          </ModalOverlay>
        )}
      </Info>
    </div>
  );
};

export default AdvocatesList;
