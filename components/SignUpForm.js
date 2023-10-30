import React, { useState } from 'react';
import FormInput from './FormInput';

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or perform client-side validation
  };

  const containerStyle = {
    maxWidth: '400px', 
    margin: '0 auto',  
    padding: '20px',   
  };
const headingStyle = {
    color: 'white', 
    marginRight: '30px', 
  };
  return (
    <div style={containerStyle}>
     <h1 style={headingStyle}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <FormInput type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <FormInput type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <FormInput type="email" name="email" value={formData.email} onChange={handleChange} />
        <FormInput type="password" name="password" value={formData.password} onChange={handleChange} />
        <FormInput type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
       
        <button type="submit"
        style={{
          backgroundColor: '#0510b1', 
          color: 'white',
          padding: '10px 50px',
          
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          marginRight: '10px',
          marginLeft:'15px',
        }}
      >
        Sign up
      </button>
      </form>
    </div>
  );
}

export default SignUpForm;
