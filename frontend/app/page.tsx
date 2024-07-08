"use client";

import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1 className = "text-danger">{message}</h1>
    </div>
  );
};

export default Home;
