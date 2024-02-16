import React from 'react'
import {Typography} from '@mui/material';

const TelerehabPage = () => {
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
        Telerehabilitation
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Telerehabilitation is a healthcare service that leverages digital technology to provide remote rehabilitation services to patients. Through virtual platforms, patients can access rehabilitation exercises, receive guidance from healthcare professionals, and monitor their progress from the comfort of their homes. This approach offers convenience, accessibility, and continuity of care, making rehabilitation more flexible and adaptable to individual needs. Telerehabilitation is particularly beneficial for those with mobility challenges or limited access to traditional healthcare facilities.
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Healthcare services we provide through telerehabilitation are :
        </Typography>
        <ul>
        <li><Typography variant="body1" style={normalTextStyle}>
        1. Physiotherapy Consultation
        </Typography></li>
        <li><Typography variant="body1" style={normalTextStyle}>
        2. Doctors consultation
        </Typography></li>
        <li><Typography variant="body1" style={normalTextStyle}>
        3. Psychology Consultation
        </Typography></li>
        <li><Typography variant="body1" style={normalTextStyle}>
        4. Gynecology Consultation
        </Typography></li>
        <li><Typography variant="body1" style={normalTextStyle}>
        5. Diet Consultation
        </Typography></li>
        </ul>
        </div>
    </div>
  )
}

export default TelerehabPage