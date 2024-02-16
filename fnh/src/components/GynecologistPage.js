import React from 'react'
import {Typography} from '@mui/material';

const GynecologistPage = () => {
  const headingStyle = {
    color: '#1f3557',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
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
        Gynecologist’s Consultation
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Our gynecologists conduct virtual consultations to address women's health concerns, offer advice on reproductive health, and discuss pregnancy-related issues. Digital health assessments help gather relevant information, and secure telehealth platforms enable real-time communication for privacy.
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Gynecologists may utilize online resources to share educational materials, answer queries, and provide guidance on contraception, fertility, and prenatal care. Follow-up appointments, prescription management, and referrals can also be facilitated through the online portal, offering convenience and accessibility for women seeking gynecological care.
        </Typography>
        </div>
    </div>
  )
}

export default GynecologistPage