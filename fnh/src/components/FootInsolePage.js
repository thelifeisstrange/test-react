import React from 'react'
import {Typography} from '@mui/material';

const FootInsolePage = () => {
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
        Customised Foot Insoles
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Our customised foot insoles are expertly designed to address foot pronation and other posture issues caused due to it. By providing personalized support and alignment, they help alleviate discomfort and promote proper foot positioning, contributing to improved overall posture. Experience enhanced comfort and stability with our tailor-made insoles.
        </Typography>
        <Typography variant="body1" style={subheadingStyle}>
        Foot Pressure assessment 
        </Typography>
        <ul>
        <li><Typography variant="body1" style={normalTextStyle}>
        1. Static (Pressure reading while standing)
        </Typography></li>
        <li><Typography variant="body1" style={normalTextStyle}>
        2. Dynamic(Pressure reading while walking & running)
        </Typography></li>
        <li><Typography variant="body1" style={normalTextStyle}>
        3. Postural(Musculoskeletal Balancing)
        </Typography></li>
        </ul>
        <Typography variant="body1" style={normalTextStyle}>
        We do assessment(foot scan), identify the deformity and provide customised insole.
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        We provide customised foot insoles for Pronated foot, foot-corn, recurrent foot-corn, Toe Bunion, Heel-spur, Plantar fascitis etc
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        *We provide customised footwear too
        </Typography>
        </div>
    </div>
  )
}

export default FootInsolePage