import React from 'react';
const AboutUs = () => {

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
    <div>
        <div style={{marginLeft:"5%", marginRight:"5%", marginBottom:"9dvh" ,color:"#ffffff", display:"flex", flexDirection:"column" ,justifyContent:"center"}}>
        <p gutterBottom style={headingStyle}>
        About us
        </p>
        <p style={normalTextStyle}>            
        Faith n Heal Physiotherapy and Wellness Zone is a growing startup based on Home Health Care Services in and around Pune.
        </p>
        <p style={normalTextStyle}>            
        Founder And Director :  Dr.Suyash Vanmore (PT)
        </p>
        <p style={normalTextStyle}>
        We are a digital marketplace for health care services through our healthcare providers.
        </p>
        <p style={normalTextStyle}>
        We offer wide range of healthcare services including Physiotherapy, Psychology Consultation, Diet consultation, Nursing care at Home, Elderly Care, Tele-rehabilitation, Gynecologist's Consultation, Medical Diagnostic Services, Medical Equipments, Ayurvedic Treatment, Doctor's Consultation and Customized Foot Insoles.
        </p>
        <p style={normalTextStyle}>
        Our aim is to deliver exceptional healthcare services at the comfort of your home.
        </p>
        </div>
    </div>
  )
}

export default AboutUs;