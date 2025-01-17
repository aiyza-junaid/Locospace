// pages/signup/index.tsx

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/signup.css';
import Link from 'next/link';
import MapComponent from '../../components/Map/Map';
import SignupNavbar from '../../components/Signup/SignupNavbar';
import { latLng } from 'leaflet';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const [community, setCommunity] = useState('');
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, name, address, contact, community , location}),
      });

      if (!response.ok) {
        throw new Error('User not created');
      } else {
        const data = await response.json();
        router.push('/');
      }
    } catch (error) {
      console.error('Sign Up Error:', error);
    }
  };

  return (
    <div className="background">
      <SignupNavbar/>  
      <div className="signUpBox">
        <h2 className="signUpHeading">Sign up</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          <div className="formContainer">
            <div className="leftInputs">
              <div className="inputBox">
                <input type="text" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Username</label>
              </div>
              <div className="inputBox">
                <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Password</label>
              </div>
              <div className="inputBox">
                <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                <label>Name</label>
              </div>
              <div className="inputBox">
                <input type="text" name="address" required style={{ height: '60px', margin: '0px' }} value={address} onChange={(e) => setAddress(e.target.value)} />
                <label>Address</label>
              </div>
            </div>
            <div className="rightInputs">
              <div className="inputBox">
                <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Email</label>
              </div>
              <div className="inputBox">
                <input type="password" name="confirm_password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <label>Confirm Password</label>
              </div>
              <div className="inputBox">
                <input type="text" name="contact" required value={contact} onChange={(e) => setContact(e.target.value)} />
                <label>Contact</label>
              </div>
              <div className="inputBox">
              <label>Location</label>
                <MapComponent onLocationSelect={(lat: number, lng: number) => setLocation({ latitude: lat, longitude: lng })}/>
              </div>
            </div>
          </div>
          <button type="submit" className="signUpButton">Sign up</button>
          <div className="accountPrompt">
            <span>
              Already have an account?{' '}
              <Link href="/login">
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
