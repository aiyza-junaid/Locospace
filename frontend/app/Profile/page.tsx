"use client";

import React, { useEffect, useState } from 'react';
import ProfileBar from '../../components/Profile/ProfileNavbar';

import UserProfile from '../../components/Profile/UserProfile';

const MyProfile: React.FC = () => {
  
  return (
    <div>

      <ProfileBar/>
      <div className='header'>User Profile</div>
      <UserProfile/>
      

      
    </div>
  );
};

export default MyProfile;
