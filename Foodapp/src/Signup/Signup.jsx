import React from 'react';
import './Signup.css';

const Signup = ({ closeSignup }) => {
  return (
    <div className="signup-modal">
      <div className="signup-content">
        <div className="signup-header">
          <h2>Sign Up</h2>
          <button className="close-btn" onClick={closeSignup}>&times;</button>
        </div>

        <form className="signup-form">
          <input type="text" placeholder="Your name" className="input-field" />
          <input type="email" placeholder="Your email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="signup-btn">Create account</button>
        </form>

        <div className="terms">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>

        <p className="login-text">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
