
import React from 'react';

function FormInput({ type, name, value, onChange }) {
    const inputStyle = {
        margin: '10px 0', 
        padding: '8px',   
      };
  return (
    <div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={name.charAt(0).toUpperCase() + name.slice(1)} 
      style={inputStyle}
      className="custom-input"
    />
    </div>
  );
}

export default FormInput;
