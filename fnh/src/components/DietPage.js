import React from 'react'
import {Typography} from '@mui/material';

const DietPage = () => {
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
        Diet Consultation
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Dieticians employ virtual consultations using video calls, digital health assessments, and meal planning software to provide personalized nutrition guidance. Clients can submit digital food journals, and the dietician shares educational resources, recipes, and conducts regular follow-ups through secure telehealth platforms. Online group sessions, integration with health apps, and the use of wearables further enhance the holistic approach to nutrition counseling, allowing for flexibility, accessibility, and effective support in a digital environment.
        </Typography>
        </div>
    </div>
  )
}

export default DietPage