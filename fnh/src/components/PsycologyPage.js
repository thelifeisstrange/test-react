import React from 'react'
import {Typography} from '@mui/material';

const PsycologyPage = () => {

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
        Psycology Consultation
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        In psychological counseling, sessions are conducted through secure video calls or chat platforms. Initial assessments and screenings are done digitally, ensuring privacy. Our therapists use virtual tools to administer psychological assessments and gather information. Follow-up appointments, progress tracking, and emotional support are provided through secure communication channels. This approach allows for flexible and accessible mental health care while maintaining confidentiality and therapeutic efficacy.
        </Typography>
        </div>
    </div>
  )
}

export default PsycologyPage