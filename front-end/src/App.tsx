import { useState, useEffect } from 'react';
import './style.css';
import { Box, Typography } from '@mui/material';
import LandingPage from './Components/LandingPage';

function App() {

  return (
      <div className='box'>
        <LandingPage />
      </div>
  );
}

export default App;