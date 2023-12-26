import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppContainer = styled.div`
background-color:#1A1110;
background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignupContainer = styled.div`
background-color: #F2F3F4;
  padding: 20px;
  border-radius: 15px;
  width: 350px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
font-weight:600;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 250px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 8px;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const EyeIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Button = styled.button`
  width: 150px;
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    background-color:#6F00FF;
  }
`;

const Login3 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Add signup logic here
  };
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect or perform actions upon successful login
        window.location.href = '/Navbar3'; // Replace with your actual route
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <AppContainer>
      <SignupContainer>
        <h2>Login</h2>
        <br />

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <PasswordContainer>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <EyeIcon onClick={handlePasswordVisibility}>👁️</EyeIcon>
            </PasswordContainer>
          </FormGroup>

          <Button type="submit" onClick={handleLogin}>Login</Button>
        </Form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
        <Link to="/signup3">Already have an account? Login</Link>
      </SignupContainer>
    </AppContainer>
  );
};

export default Login3;
