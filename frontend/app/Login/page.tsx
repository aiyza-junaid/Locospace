// frontend/app/Login/page.tsx

import React from 'react';
import '../../styles/login.css'; // Adjust the path based on your folder structure
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

      <div className="loginBox">
        <h2 >Sign in</h2>
        <form>
          <div className="inputBox">
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
          <div className="accountPrompt">
            <span>Don't have an account? </span>
            <Link href="./Signup/page">
              <div className="createAccountLink">Create new account</div>
            </Link>
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default Login;
