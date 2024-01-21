import React from 'react';
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
        title: 'Psychology Consultation',
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
      }
    // ... (Repeat for other testimonials)
  ];

  return (
    <div>
        <Typography variant="h2" gutterBottom style={headingStyle}>
        Our Services
        </Typography>
   
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center', margin:'10%' }}>
      {testimonialsData.map((testimonial, index) => (
        <Card key={index} style={{ width:"250px", flex: '0 0 auto', marginRight: '3%', marginBottom: '9%', backgroundColor:"#E8EEFF" ,'@media (max-width: 600px)': { width:"250px", marginRight: '10px',  marginBottom: '10px', display:"flex", justifyContent:"center" } }}>
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
      ))}
    </div>
    </div>
  );
};

export default ServicesCard;
