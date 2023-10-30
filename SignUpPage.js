// src/SignUpPage.js
import React from 'react';
import './SignUpPage.css';

function SignUpPage() {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <img src="your-image-url.jpg" alt="Your Logo" />
        <h2 className="signup-heading">Sign Up</h2>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUpPage;
