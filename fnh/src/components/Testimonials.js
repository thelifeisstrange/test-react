import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const Testimonials = () => {
  const headingStyle = {
    color: '#1f3557',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop:'20px'
    // Add other custom styles as needed
  };
  const testimonialsData = [
    {
      title: 'Mr Harsh Rajput',
      description: 'Dr Suyash is one of the best physiotherapist the way he treats is very friendly, i had pelvic bone fracture and surgery was done in june sir made me walk in less than 40 days, he uses very good techniques and he pushed me very much to reach my extreme best thank you suyash sir for your best treatment.',
    },
    {
      title: 'Mr Ravindra Ambokar',
      description: 'My son had suffered from "Bilateral Cerebelar Infarction on 3rd March 2010 ". He is undergoing physiotherapy from Dr Suyash which has benefited my son to improve his physical health and regain his  movements. He is now able to walk with the help of stick under observation. Great progress! I wish all the best to Dr Suyash in his future endeavors.',
    },
    {
      title: 'Mrs.Shilpa Bhosle',
      description: 'Thank you suyash for  your excellent treatment n helping me to get over my hip replacement surgery',
    },
    {
      title: 'Mrs.Rubina Bijapure',
      description: 'The physiotherapists provide a very personal service and seem to ensure that the atmosphere is calming, professional and friendly. My physiotherapist was incredibly approachable which definitely made me feel more positive and relaxed about my recovery. Things were explained in a much more comprehensive but understandable way .Thank you dear Suyash for your wonderful service through Faith n Heal Physiotherapy and Wellness Zone.',
    },
    {
      title: 'Mr. S N Joshi',
      description: 'I had fracture on my right hand before 1 month. Dr Suyash gave me best treatment and helped me get back to my routine very soon.',
    },
    {
      title: 'Mr.Harshit choudhary ',
      description: 'I want to thank Dr. Suyash for his amazing physiotherapy treatment. This guy knows his stuff and has been helping me move better and feel more in control of my body. Dr. Suyash doesn\'t just throw exercises at you; he explains everything in simple terms, making it easy for a me to understand. His encouragement and positive vibes have been source of motivation in every session. ',
    },
    {
    title: 'Mrs.Alka Mokashi',
    description: 'मी आणि माझी आई आम्ही दोघेही सुयशचे पेशंट आहोत.आई चे वय ९३, माझे ७३ आहे. त्यांच्या ट्रिटमेंट मुळे आम्हाला जो अनुभव आला आहे तो खूपच समाधान देणारा असल्याने मी मुंबईत राहते तरी ट्रीटमेंट साठी पुण्यात येत असते. ते खूप व्यवस्थित ट्रीटमेंट करतात, धन्यवाद.',
    },
  ];

  return (
    <div>
       <Typography variant="h2" gutterBottom style={headingStyle}>
         Testimonials
        </Typography>
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', overflowX: 'auto', alignItems: 'center', margin: '2%', whiteSpace: 'nowrap', scrollbarWidth: 'thin', scrollbarColor: '#888 #f0f0f0' }}>
      {testimonialsData.map((testimonial, index) => (
        <Card key={index} style={{ width:"250px", height:"25%" ,flex: '0 0 auto', marginRight: '6%',textWrap:"wrap" , backgroundColor:'#E8EEFF','@media (max-width: 600px)': {width:"250px", height: "215dvh", marginRight: '10dvw' } }}>
          
          <CardContent>
          
          <Typography variant="body2" color="text.secondary" sx={{color: '#1f3557'}}>
                {testimonial.description}
              </Typography>
          
              <Typography gutterBottom variant="h6" component="div" sx={{color: '#1f3557'}}>
                {testimonial.title}
              </Typography>
            </CardContent>
          
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Testimonials;
