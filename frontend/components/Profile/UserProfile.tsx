import React, { useState, useEffect } from 'react';
import '../../styles/profile.css'; // Make sure to adjust the path based on your folder structure
import useAuthStore from '../../authStore';

const UserProfile: React.FC = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [profilePicture, setProfilePicture] = useState('');

  const { token } = useAuthStore();

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/myprofile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const Data = await response.json();
        setUsername(Data.username);
        setPassword(Data.password);
        setName(Data.name);
        setEmail(Data.email);
        setAddress(Data.address);
        if (Data.profilePicture) {
          setProfilePicture(`data:${Data.profilePicture.contentType};base64,${Data.profilePicture}`);
        }
      } else {
        console.log('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [token]);

  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" className="profile-img" />
      </div>
      <div className="profile-details">
        <div className="detail-box">
          <label>Name:</label>
          <p>{name}</p>
          <button className="edit-button">Edit Profile</button>
        </div>
        <div className="detail-box">
          <label>Email:</label>
          <p>{email}</p>
        </div>
        <div className="detail-box">
          <label>Address:</label>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
