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
          <p>Osaed Jafar</p>
        </div>
        <div className="detail-box">
          <label>Email:</label>
          <p>broooooo@sup.com</p>
        </div>
        <div className="detail-box">
          <label>Address:</label>
          <p>RAJA HOusSe Estate Tench Bhata</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
