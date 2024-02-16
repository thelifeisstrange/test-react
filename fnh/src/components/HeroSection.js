import React from 'react';
import '../App.css';
import './HeroSection.css';
import AppointmentsCard from './AppointmentsCard';
import { Typography } from '@mui/material';

function HeroSection() {
  const headingStyle = {
    color: '#ffffff',
    fontSize: '2.6rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:'20vh',
    
    
    // Add other custom styles as needed
  };
  
  const subheadingStyle = {
    color: '#ffffff',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginLeft:'20vh',
    textAlign: 'center',
    // Add other custom styles as needed
  };
  

  return (
    <div className='hero-container'>
      <div className='video-container'>
        <img src='/images/intro.jpg' alt='Background' className='background-image' />
        <div className='overlay'></div>
        <div className='content'>
          <AppointmentsCard />
          <div className='text-content' style={{marginLeft:"10vw"}}>
            <Typography variant="h2" gutterBottom style={headingStyle}>
              Faith And Heal Physiotherapy And Wellness Zone
            </Typography>
            <Typography variant="h4" gutterBottom style={subheadingStyle}>
              Healthcare Services At Your Doorstep
            </Typography>
            
            {/* ... other text elements ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
