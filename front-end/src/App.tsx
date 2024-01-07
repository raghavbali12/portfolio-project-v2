import { useState, useEffect } from 'react';
import './style.css';
import { Box, Typography } from '@mui/material';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';

function App() {

  return (
      <div className='box'>
        <Navbar />
        <LandingPage />
      </div>
  );
}

export default App;