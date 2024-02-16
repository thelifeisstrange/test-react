import React from 'react'
import {Typography} from '@mui/material';

const CaretakerPage = () => {
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
        Elderly Care (Care taker at Home)
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Elderly caregiver services at a patient's home involve providing personalized assistance to seniors. Caregivers assist with activities of daily living, medication management, mobility support, and companionship. The goal is to enhance the overall well-being of the elderly individual, ensuring their comfort, safety, and emotional support within the familiar environment of their own home. Caretaker services contribute to maintaining independence and improving the quality of life for elderly individuals.
        </Typography>
        </div>
    </div>
  )
}

export default CaretakerPage