import React from 'react';
import SignUpForm from './components/SignUpForm';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <div className="left-image-container">
        <img
          src="/image1.png" 
          alt="Your Image Description"
          className="left-image"
        />
      </div>
      <SignUpForm />
    </div>
  );
}

export default App;
