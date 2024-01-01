import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import axios from 'axios';

const Info = styled.div`
  border-sizing: border-box;
  border: 2px solid black;
  margin-left: 10px;
  margin-right: 10px;
  padding: 15px;
`;

const Documents = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    // Fetch the list of uploaded documents from the server when the component mounts
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/files');
        setUploadedFiles(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []); // Empty dependency array ensures that this effect runs only once

  const handleFileChange = (event) => {
    const file = event.target.files;
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      // Your upload logic here

      // After successful upload, fetch the updated list of documents
      try {
        const response = await axios.get('http://localhost:5000/files');
        setUploadedFiles(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    } else {
      console.error('No file selected.');
    }
  };

  const handleDelete = async (fileId) => {
    try {
      // Send a request to delete the file by its ID
      await axios.delete(`http://localhost:5000/files/${fileId}`);

      // After successful deletion, fetch the updated list of documents
      const response = await axios.get('http://localhost:5000/files');
      setUploadedFiles(response.data);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Info>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" onClick={handleUpload}>
          Upload Document
        </button>

        <h2>Uploaded Documents</h2>
        <ul>
          {uploadedFiles.map((file) => (
            <li key={file._id}>
              <a href={`http://localhost:5000${file.path}`} target="_blank" rel="noopener noreferrer">
                {file.originalFilename} {/* Use originalFilename instead of filename */}
              </a>
              <button onClick={() => handleDelete(file._id)}>Delete</button>
            </li>
          ))}
        </ul>

      </Info>
    </div>
  );
};

export default Documents;
