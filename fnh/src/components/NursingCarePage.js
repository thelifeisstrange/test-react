import React from 'react'
import {Typography} from '@mui/material';

const NursingCarePage = () => {
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
        Nursing care at Home
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Home nursing care involves providing comprehensive healthcare services to patients in the comfort of their own homes. Nurses offer a range of services, including monitoring vital signs, administering medications, wound care, and assisting with daily activities. The goal is to promote recovery, manage chronic conditions, and ensure the patient's well-being. Home nursing care enhances patient comfort, fosters independence, and contributes to a supportive and personalized healthcare experience.
        </Typography>
        </div>
    </div>
  )
}

export default NursingCarePage