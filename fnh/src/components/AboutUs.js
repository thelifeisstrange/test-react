import React from 'react';
import {
    
    Typography,
   
  } from '@mui/material';

const AboutUs = () => {

    const headingStyle = {
        color: '#1f3557',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        // Add other custom styles as needed
      };
      
      const subheadingStyle = {
        color: '#1f3557',
        fontSize: '2.0rem',
        fontWeight: 'bold',
        // textAlign: 'center',
        // Add other custom styles as needed
      };
      
      const normalTextStyle = {
        color: '#1f3557',
        fontSize: '1.2rem',
        // marginTop:'20px'
        // textAlign: 'center',
        // Add other custom styles as needed
      };


  return (
    <div>
        <div style={{marginLeft:"5%", marginRight:"5%", marginBottom:"9dvh" ,color:"#ffffff", display:"flex", flexDirection:"column" ,justifyContent:"center"}}>
        <Typography variant="h2" gutterBottom style={headingStyle}>
        About us

        </Typography>
       
        <Typography variant="body1" style={normalTextStyle}>            
        Faith n Heal Physiotherapy and Wellness Zone is a growing startup based on Home Health Care Services in and around Pune.
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>            
        Founder And Director :  Dr.Suyash Vanmore (PT)
        </Typography>
        
        <Typography variant="body1" style={normalTextStyle}>
        We are a digital marketplace for health care services through our healthcare providers.

        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        We offer wide range of healthcare services including Physiotherapy, Psychology consultation,Diet consultation, Nursing care at home, elderly care,Tele-rehabilitation, Gynecology consultation, diagnostic services, Medical Equipments, Ayurvedic treatment, Doctor's consultation.
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Our aim is to deliver exceptional healthcare services at the comfort of your home.  </Typography>
        
        
        {/* <Typography variant="h4" gutterBottom style={ {color: '#1f3557',
        fontSize: '1.9rem',
        fontWeight: 'bold',marginTop:"2dvh", display: "flex", justifyContent:"center"}}>
        Founder and Director
        </Typography>
        <Typography variant="h4" gutterBottom style={{color: '#1f3557',
        fontSize: '1.5rem',
        fontWeight: 'bold', display: "flex", justifyContent:"center"}}>
        Dr.Suyash Vanmore (PT)
        </Typography> */}
        </div>
        
        
    </div>
  )
}

export default AboutUs;