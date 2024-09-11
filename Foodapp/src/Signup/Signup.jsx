import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for styling

const Signup = ({ closeSignup }) => {
  return (
    <div className="signup-overlay">
      <div className="signup-container">
        <button className="close-btn" onClick={closeSignup}>X</button>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-btn">Sign Up</button>
          <p>or</p>
          <button className="google-btn">
            <img src="/path-to-google-logo" alt="Google logo" /> Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
