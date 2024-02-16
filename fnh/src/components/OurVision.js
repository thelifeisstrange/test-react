import React from 'react'

const OurVision = () => {
    const headingStyle = {
        color: '#1f3557',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px'
      };
      
      const normalTextStyle = {
        color: '#1f3557',
        fontSize: '1.2rem',
        marginBottom:'10px'
      };

  return (
   <div style={{marginLeft:"5%", marginRight:"5%", marginTop:"30px" ,marginBottom:"30px" ,color:"#ffffff", display:"flex", flexDirection:"column" ,justifyContent:"center"}}>
        <p style={headingStyle}>
         Our Vision
        </p>
        <p style={normalTextStyle}>
        Faith n Heal Physiotherapy and wellness zone is focused on providing personalized and professional physiotherapy and home health care services at your door step and allow quick and convenient recovery within the comfort of one's home.
        </p>
        <p style={normalTextStyle}>
        We provide a wide range of services including Physiotherapy at Home, Customised Foot Insoles,S Home Nursing Care, Psychologist's Consultation, Gynecologist’s consultation , Elderly Care, Doctor Visit at Home(Doctor's consultation), Dietitian at Home, Ayurveda Consultation, Tele rehabilitation at home, Diagnostic services Medical Equipment's Rent and Sell.
        </p>
        <p style={normalTextStyle}>
        Our goal is to deliver qualitative services, reduce costing, provide healthcare services at your door step with Swift recovery, Backed by our strong and experienced team.
        </p>
    </div>
  )
}

export default OurVision