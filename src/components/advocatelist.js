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
`;

const AdvocatesList = ({ onSelectAdvocate }) => {
  const [advocates, setAdvocates] = useState([]);

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

  const handleSelectAdvocate = async (advocate) => {
    try {
      // Fetch the client details from the users collection
      const clientDetailsResponse = await axios.get(`http://localhost:5000/api/users/${advocate.userId}`); // Replace with your API endpoint

      // Check if client details are available
      if (clientDetailsResponse.data.success) {
        const clientDetails = clientDetailsResponse.data.user;
        

        // Combine advocate and client details
        const combinedDetails = {
          advocate: {
            username: advocate.username,
            yearsOfExperience: advocate.yearsOfExperience,
            casesDealtWith: advocate.casesDealtWith,
            state: advocate.state,
          },
          client: clientDetails,
        };

        // Call the onSelectAdvocate prop with the combined details
        onSelectAdvocate(combinedDetails);
      } else {
        console.error('Error fetching client details:', clientDetailsResponse.data.message);
      }
    } catch (error) {
      console.error('Error selecting advocate:', error);
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
      </Info>
    </div>
  );
};

export default AdvocatesList;


