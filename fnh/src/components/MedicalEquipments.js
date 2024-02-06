import React from 'react'
import {Typography} from '@mui/material';

const MedicalEquipments = () => {
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
        Medical Equipments
        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Our services extend to providing essential healthcare products directly to patients. We offer a range of medical equipment, from home care devices to mobility aids, ensuring individuals have access to quality products for their health and well-being. Our focus is on delivering reliable, affordable solutions that contribute to improved patient care and enhanced quality of life at home. We strive to make essential medical equipment easily accessible to patients, promoting better health outcomes and overall satisfaction.
        </Typography>
        </div>      
    </div>
  )
}

export default MedicalEquipments