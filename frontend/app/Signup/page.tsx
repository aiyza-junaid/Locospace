// frontend/app/Login/page.tsx

'use client'

import React from 'react';
import '../../styles/signup.css'; // Adjust the path based on your folder structure
import Link from 'next/link'; // Import Link from Next.js for client-side navigation
import Dropdown from '../../components/Dropdown'; // Corrected path
import useAuth from '../../authStore';
import {useRouter} from 'next/navigation';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Signup: React.FC = () => {
    const options = ["", 'Community 1', 'Community 2', 'Community 3'];
    const handleCommunitySelect = (selectedOption: string) => {
        console.log('Selected Community:', selectedOption);
        // Implement your logic for handling community selection here
    };

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
                <form>
                    <div className="leftInputs">
                        <div className="inputBox">
                            <input type="text" name="username" required />
                            <label>Username</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" required />
                            <label>Password</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="name" required />
                            <label>Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="address" required style={{height:'60px', margin: '0px'}} />
                            <label>Address</label>
                        </div>
                    </div>

                    <div className="rightInputs">
                        <div className="inputBox">
                            <input type="email" name="email" required />
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="confirm_password" required />
                            <label>Confirm Password</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="contact" required />
                            <label>Contact</label>
                        </div>
                        <div className="locationinputBox">
                            <label>Location</label>
                            <button> Locate on Map </button>
                        </div>
                    </div>
                    <button type="submit" style={{margin:'0px'}}>Sign up</button>
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
