// frontend/app/Login/page.tsx
'use client'

import React from 'react';
import '../../styles/signup.css'; // Adjust the path based on your folder structure
import Link from 'next/link'; // Import Link from Next.js for client-side navigation

const Login: React.FC = () => {
  return (
    <div className="background">
      
         <Link href="/">
        <div className="homeButton">Locospace</div>
      </Link>
      
      <Link href="/">
      <img src="Logo.png" alt="Logo" className="logo" />
      </Link>

      <div className="signupBox">
        <h2 >Sign Up</h2>
        <form>
        <div className="formGrid"> 
            <div className="inputBox">
                <input type="email" required />
                <label>Email</label>
            </div>
            <div className="inputBox">
                <input type="password" pattern='[A-Z],[a-z],[0-9],{8-16}' required />
                <label>Password</label>
            </div>
            <div className="inputBox">
              <input type="password" pattern='[A-Z],[a-z],[0-9],{8-16}' required />
              <label>Confirm Password</label>
            </div>
            <div className="inputBox">
              <input type="tel" pattern="[0-9]{10}" required />
              <label>Phone Number</label>
            </div>
            <div className="inputBox">
              <input type="Name" pattern='[A-Z],[a-z],{8-16}' required />
              <label>Name</label>
            </div>
            <div className="inputBox">
              <input type="tel" pattern="[0-9]{10}" required />
              <label>Phone Number</label>
            </div>
        </div>
            <button type="submit">Sign Up</button>
            <div className="loginPrompt">
                <span>Already have an account? </span>
                <Link href="/Login">
                <div className="loginLink">Sign in</div>
                </Link>
            </div>
        </form>
      
      </div>
    </div>
  );
};

export default Login;
