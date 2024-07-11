// frontend/app/Login/page.tsx
'use client'
import React, { useState } from 'react';
import '../../styles/login.css'; // Adjust the path based on your folder structure
import Link from 'next/link'; // Import Link from Next.js for client-side navigation
import useAuth from '../../authStore';
import {useRouter} from 'next/navigation';

import { IoEyeOff } from "react-icons/io5";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setToken = useAuth(state => state.setToken);
  const router = useRouter()


  const handleLogin = async () => {

    
    console.log(email,password)
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        setToken(token);
        router.push('/')
      } else {
        console.error('Login failed:', response.statusText);
        
      }
    } catch (error) {
      console.error('Login error:');
    }
  };

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
            <Link href="/Signup">
              <div className="createAccountLink">Create new account</div>
            </Link>
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default Login;
