// frontend/app/Login/page.tsx

'use client'
import React, { useState } from 'react';
import '../../styles/signup.css'; // Adjust the path based on your folder structure
import Link from 'next/link'; // Import Link from Next.js for client-side navigation
import Dropdown from '../../components/Dropdown'; // Corrected path
import useAuth from '../../authStore';
import {useRouter} from 'next/navigation';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async () => {
        const router = useRouter();
        // Compare passwords
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return; // Stop the form submission
        }

        // If passwords match, proceed with form submission logic
        setError(''); // Clear any previous error messages
        console.log('Form submitted'); // Placeholder for form submission logic 

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username,email, password, name, address, contact }),
            });
            if (!response.ok) {
                throw new Error('User not created');
              }else{
                const data = await response.json();
                router.push('/')
              }
              
          } catch (error) {
            console.error('Sign Up Error:', error);
        }
        
    }

    return (
        <div className="background">
            <Link href="/">
                <div className="homeButton">Locospace</div>
            </Link>

            <Link href="/">
                <img src="Logo.png" alt="Logo" className="logo" />
            </Link>

            <div className="signUpBox">
                <h2 className="signUpHeading">Sign up</h2>
                <p>Create an account</p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSignup();}} >
                    <div className="leftInputs">
                        <div className="inputBox">
                            <input type="text" name="username" required  value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label>Username</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" required  value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <label>Password</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="name" required  value={name} onChange={(e) => setName(e.target.value)}/>
                            <label>Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="address" required style={{height:'60px', margin: '0px'}}  value={address} onChange={(e) => setAddress(e.target.value)}/>
                            <label>Address</label>
                        </div>
                    </div>

                    <div className="rightInputs">
                        <div className="inputBox">
                            <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="confirm_password" required value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                            <label>Confirm Password</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="contact" required onChange={(e) => setContact(e.target.value)}/>
                            <label>Contact</label>
                        </div>
                        <div className="locationinputBox">
                            <label>Location</label>
                            <button> Locate on Map </button>
                        </div>
                    </div>
                    <button type="submit" style={{margin:'0px'}}>Sign up</button>
                    {error && <div style={{color: 'red'}}>{error}</div>}
                    <div className="accountPrompt">
                        <span>Already have an account? 
                            <Link href="/Login">
                            <div className="createAccountLink">Sign in</div>
                        </Link> 
                        </span>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Signup;
