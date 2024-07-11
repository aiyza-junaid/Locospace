"use client";

import React, { useState } from 'react';
import ProfileBar from '../../components/Profile/ProfileNavbar';
import UserProfile from '../../components/Profile/UserProfile';
import '../../styles/profile.css'; // Make sure to adjust the path based on your folder structure
import Footer from '../../components/LandingFooter';


const MyProfile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'listings' | 'threads'>('listings');

  return (
    <div>
      <ProfileBar />
      <div className='head'>User Profile</div>
      <UserProfile />
      <div className="toggle-container">
        <button
          className={`toggle-button ${selectedTab === 'listings' ? 'active' : ''}`}
          onClick={() => setSelectedTab('listings')}
        >
          Listings
        </button>
        <button
          className={`toggle-button ${selectedTab === 'threads' ? 'active' : ''}`}
          onClick={() => setSelectedTab('threads')}
        >
          Threads
        </button>
      </div>
      <div className="content-container">
        {selectedTab === 'listings' ? (
          <div className="listings-content">Listings Kaafi zahda??</div>
        ) : (
          <div className="threads-content">Threads Content</div>
        )}
      </div>
      <Footer/>
    </div>
    
  );
};

export default MyProfile;
