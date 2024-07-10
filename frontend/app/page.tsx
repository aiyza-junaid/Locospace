"use client";

import React, { useEffect, useState } from 'react';
import CustomNavBar from '../components/LandingNavbar';
import LandingPageComp from '../components/LandingMiddleCon';
import CardCarouselComp from '../components/LandingCardCarouselComp';
import Footer from '../components/LandingFooter';

const LandingPage: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <CustomNavBar />
      <LandingPageComp/>
      <CardCarouselComp />
      <Footer/>
    </div>
  );
};

export default LandingPage;
