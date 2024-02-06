import React from 'react';
import {Link} from 'react-router-dom'
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const ServicesCard = () => {

    const headingStyle = {
        color: '#1f3557',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:"20px"
        // Add other custom styles as needed
      };

  const testimonialsData = [
    {
      image: '/imgs/physio.png',
      title: 'Physiotherapy Services',
    },
    {
        image: '/imgs/psycology.png',
        title: 'Psycology Consultation',
      },
      {
        image: '/imgs/diet.png',
        title: 'Diet Consultation',
      },
      {
        image: '/imgs/gynec.png',
        title: 'Gynecologist\'s Consultation',
      },
      {
        image: '/imgs/ayurveda.png',
        title: 'Ayurvedic Treatment',
      },
      {
        image: '/imgs/nursingcare.png',
        title: 'Nursing Care at Home',
      },
      {
        image: '/imgs/elderly.png',
        title: 'Care Take At Home',
      },
      {
        image: '/imgs/medicalequip.png',
        title: 'Medical Equipments',
      },
      {
        image: '/imgs/diagnostic.png',
        title: 'Medical Diagnostic Services',
      },
      {
        image: '/imgs/telerehab.png',
        title: 'Telerehabilitation',
      },
      {
        image: '/imgs/Insole.png',
        title: 'Customised foot insoles',
      }
    // ... (Repeat for other testimonials)
  ];
  const serviceRoutes = [
    '/physiotherapy',
    '/psycology',
    '/diet',
    '/gynecology',
    '/ayurveda',
    '/nursingcare',
    '/caretaker',
    '/medicalequipments',
    '/diagnosticservices',
    '/telerehabilitation',
    '/customisedfootinsoles',
    // ... (Add paths for other services)
  ];

  return (
    <div>
        <Typography variant="h2" gutterBottom style={headingStyle}>
        Our Services
        </Typography>
   
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', margin:'9%' }}>
      {testimonialsData.map((testimonial, index) => (
        <Link to={serviceRoutes[index]} key={index} style={{ textDecoration: 'none' }}>
        <Card key={index} style={{ width:"280px", flex: '0 0 auto', marginRight: '3%', marginBottom: '9%', backgroundColor:"#E8EEFF" ,'@media (max-width: 600px)': { width:"250px", marginRight: '7px',  marginBottom: '10px', display:"flex", justifyContent:"center" } }}>
          <CardActionArea>
            <CardMedia
              component="img"
              width='100%'
              height="100%"
              style={{padding:"5%"}}
              image={testimonial.image}
              alt={testimonial.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{color: '#1f3557',  fontWeight: 'bold', textAlign: 'center',}}>
                {testimonial.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default ServicesCard;
