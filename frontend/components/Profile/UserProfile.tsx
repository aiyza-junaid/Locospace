import React from 'react';
import '../../styles/profile.css'; // Make sure to adjust the path based on your folder structure

const UserProfile: React.FC = () => {
  return (
    
    <div className="profile-container">
      <div className="profile-picture">
        <img src="profile-pic.jpg" alt="Profile" className="profile-img" />
      </div>
      <div className="profile-details">
        <div className="detail-box">
          <label>Name:</label>
          <p>John Doe</p>
        </div>
        <div className="detail-box">
          <label>Email:</label>
          <p>john.doe@example.com</p>
        </div>
        <div className="detail-box">
          <label>Address:</label>
          <p>123 Main St, Cityville, Country</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
