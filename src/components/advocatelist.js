import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const AdvocatesTable = styled.table`
background-color: #bbc7dc;

  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  color:#111111;
  border: 3px solid #36454F;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child() {
    background-color: #f2f2f2;
  }
`;

const TableData = styled.td`
  border: 3px solid black;
  padding: 8px;
`;

const Info = styled.div`
border-sizing:border-box;
border:2px solid black;
  margin-left:30px;
  margin-right:30px;
  padding: 20px;
`;

const AdvocatesList = ({ advocates, onSelectAdvocate }) => {
  return (
    <div>
      <Navbar/>
      <Info>
    <AdvocatesTable>
      <thead>
        <tr>
          <TableHeader>Advocate Name</TableHeader>
          <TableHeader>Experience</TableHeader>
          <TableHeader>Types of Cases</TableHeader>
          <TableHeader>Action</TableHeader>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate) => (
          <TableRow key={advocate.id}>
            <TableData>{advocate.name}</TableData>
            <TableData>{advocate.experience} years</TableData>
            <TableData>{advocate.caseTypes.join(', ')}</TableData>
            <TableData>
              <button onClick={() => onSelectAdvocate(advocate.id)}>
                Select
              </button>
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </AdvocatesTable>
    </Info>
    </div>
  );
};

const handleSelectAdvocate = (advocateId) => {
  console.log(`Selected advocate with ID: ${advocateId}`);
};

const ExampleComponent = () => {
  const advocates = [
    { id: 1, name: 'Naidu', experience: 5, caseTypes: ['Civil', 'Criminal'] },
    { id: 2, name: 'Ram Jethmalani', experience: 8, caseTypes: ['Family', 'Corporate'] },
    { id: 2, name: 'Soli Sorabjee', experience: 10, caseTypes: ['Family', 'Criminal'] },
    { id: 2, name: 'Gopal Subramaniam', experience: 3, caseTypes: ['Civil', 'Corporate'] },
    { id: 2, name: 'Indira Jaising', experience: 5, caseTypes: ['Criminal', 'Corporate'] },
    { id: 2, name: 'Rebecca John', experience: 6, caseTypes: ['Family', 'Civil'] },
    { id: 2, name: 'Meneka Guruswamy', experience: 8, caseTypes: ['Family', 'Corporate'] },

  ];

  return (
    <div>
      <h1>List of Advocates</h1>
      <AdvocatesList advocates={advocates} onSelectAdvocate={handleSelectAdvocate} />
    </div>
  );
};

export default ExampleComponent;
