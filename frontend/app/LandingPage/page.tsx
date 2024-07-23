"use client";

import React from 'react';
import CustomNavBar from './LandingNavbar';
import LandingPageComp from './LandingMiddleCon';
import CardCarouselComp from './LandingCardCarouselComp';
import Footer from './LandingFooter';

const LandingPage: React.FC = () => {
  
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
