import { useState, useEffect } from 'react';
import './style.css';
import { Box, Typography } from '@mui/material';

function App() {

  return (
      <div className='box'>
        <Typography variant="h3" component="div" gutterBottom color="#09111b" position="absolute" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', paddingTop: '5%', width: '100%', height: '100%', zIndex: 1, textShadow: '0px -4px 4px rgba(19, 17, 27, 1)' }}>
          Hello World
        </Typography>
        <span></span>
      </div>
  );
}

export default App;