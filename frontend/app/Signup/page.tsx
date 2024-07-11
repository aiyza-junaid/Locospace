// frontend/app/Login/page.tsx

'use client'

import React from 'react';
import '../../styles/signup.css'; // Adjust the path based on your folder structure
import Link from 'next/link'; // Import Link from Next.js for client-side navigation
import Dropdown from '../../components/Dropdown'; // Corrected path

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
                            <input type="text" name="name" required />
                            <label>Name</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="password" required />
                            <label>Password</label>
                        </div>
                        <div className="inputBox">
                            <Dropdown options={options} onSelect={handleCommunitySelect} />
                            <label>Community</label>
                        </div>
                        <div className="inputBox house">
                            <input type="text" name="house_no" required />
                            <label>House No.</label>
                        </div>
                    </div>

                    <div className="rightInputs">
                        <div className="inputBox">
                            <input type="text" name="email" required />
                            <label>Email</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="confirm_password" required />
                            <label>Confirm Password</label>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="city" required />
                            <label>City</label>
                        </div>
                        <div className="inputBox street">
                            <input type="text" name="street_no" required />
                            <label>Street No.</label>
                        </div>
                    </div>

                    <button type="submit">Sign up</button>
                    <div className="accountPrompt">
                        <span>Already have an account? </span>
                        <Link href="/Login">
                            <div className="createAccountLink">Sign in</div>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
