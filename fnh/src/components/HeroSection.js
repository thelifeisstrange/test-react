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
  
  const normalTextStyle = {
    color: '#ffffff',
    fontSize: '1.2rem',
    // marginLeft:'20vh',
    // textAlign: 'center',
    // Add other custom styles as needed
  };

  const translucentBoxStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity as needed
    padding: '10px', // Add padding as needed
    borderRadius: '8px', // Adjust the border radius as needed
    marginLeft:'20vh',
  };

  return (
    <div className='hero-container'>
      <div className='video-container'>
        <img src='/images/intro.jpg' alt='Background' className='background-image' />
        <div className='overlay'></div>
        <div className='content'>
          <AppointmentsCard />
          <div className='text-content'>
            <Typography variant="h2" gutterBottom style={headingStyle}>
              Faith And Health Physiotherapy And Wellness Zone
            </Typography>
            <Typography variant="h4" gutterBottom style={subheadingStyle}>
              Healthcare Services At Your Doorstep
            </Typography>
            <div style={translucentBoxStyle}>
              <Typography variant="body1" style={normalTextStyle}>
              Physiotherapy
              </Typography>
              <Typography variant="body1" style={normalTextStyle}>
              Psychology Consultation
              </Typography>
              <Typography variant="body1" style={normalTextStyle}>
              Diet Consultation
              </Typography>
              <Typography variant="body1" style={normalTextStyle}>
              Gynecologist’s Consultation
              </Typography>
              <Typography variant="body1" style={normalTextStyle}>
              Ayurvedic Treatment
              </Typography>
              <Typography variant="body1" style={normalTextStyle}>
              Nursing Care at Home
              </Typography>
              <Typography variant="body1" style={normalTextStyle}>
              Care taker at Home
              </Typography>
              <Typography variant="body1" style={normalTextStyle}>
              Doctor’s Consultation
              </Typography>
              <Typography variant="body1" style={normalTextStyle}>
              Telerehabilitation              </Typography>
               
            </div>
            {/* ... other text elements ... */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
