import React from 'react'
import {Typography} from '@mui/material';

const AyurvedaPage = () => {
  const headingStyle = {
    color: '#1f3557',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    // Add other custom styles as needed
  };
  
  const subheadingStyle = {
    color: '#1f3557',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    // textAlign: 'center',
    // Add other custom styles as needed
  };
  
  const normalTextStyle = {
    color: '#1f3557',
    fontSize: '1.2rem',
    marginTop:'20px',
    marginBottom:'20px'
    // textAlign: 'center',
    // Add other custom styles as needed
  };

  return (
    <div>
      <div style={{marginTop:"5dvh",marginLeft:"5%", marginRight:"5%" ,color:"#ffffff", display:"flex", flexDirection:"column" ,justifyContent:"center"}}>
        <Typography variant="h2" gutterBottom style={headingStyle}>
        Ayurvedic Treatment
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        In Ayurvedic practice, consultations are conducted through home visits, video calls or chats. Initial assessments involve detailed discussions, pulse reading, and examination of symptoms shared digitally. 
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        We provide following Ayurvedic treatments in home setup:
        </Typography>
        <ul>
        <li><Typography variant="body1" style={normalTextStyle}>
        •	Marma Therapy
        </Typography></li>
        <li><Typography variant="body1" style={normalTextStyle}>
        •	Agni Vidha Karma
        </Typography></li>
        <li><Typography variant="body1" style={normalTextStyle}>
        •	Ayurvedic massage
        </Typography></li>
        </ul>
        <Typography variant="body1" style={normalTextStyle}>
        Ayurvedic prescriptions, including herbal remedies, dietary recommendations, and lifestyle advice, are provided electronically. Follow-up sessions are conducted to monitor progress and make adjustments. Online platforms facilitate the exchange of health-related information and ensure a personalized Ayurvedic approach while maintaining the principles of holistic healing.
        </Typography>
        </div>
    </div>
  )
}

export default AyurvedaPage