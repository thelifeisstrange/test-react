import React from 'react'
import {Typography} from '@mui/material';

const MedicalDiagnostics = () => {
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
        Diagnostic Services
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        As a medical diagnostic lab service provider, we offer a comprehensive range of diagnostic tests and services. Our state-of-the-art laboratory is equipped to conduct various medical tests, including blood work, imaging, pathology, and other diagnostic procedures. We prioritize accuracy, efficiency, and timely results, ensuring healthcare professionals and patients receive the necessary information for informed medical decisions. Our commitment is to deliver reliable diagnostic services that contribute to effective patient care and promote overall well-being.
        </Typography>
        </div>
    </div>
  )
}

export default MedicalDiagnostics