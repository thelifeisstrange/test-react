import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
import slider from '../helpers/sliders.json';
import { Button, styled, Box, Typography } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import './Carousel.css';

const StyledNavigateNext = styled(NavigateNext)({
  display: 'flex',
  alignItems: 'center',
  fontSize: 36, // Adjust the font size as needed
});

const StyledNavigateBefore = styled(NavigateBefore)({
  display: 'flex',
  alignItems: 'center',
  fontSize: 36, // Adjust the font size as needed
});

function Example() {

    const headingStyle = {
        color: '#1f3557',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        
        
        
        // textAlign: 'center',
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
        marginTop:'20px'
        // textAlign: 'center',
        // Add other custom styles as needed
      };

      

  return (
    <>
    <div className='text-content' style={{marginTop:"5vh", marginLeft:"25vw"}}>
        <Typography variant="h2" gutterBottom style={headingStyle}>
         What We Do
        </Typography>
        {/* <Typography variant="h4" gutterBottom style={subheadingStyle}>
          Healthcare Services At Your Doorstep
        </Typography> */}
        <Typography variant="body1" style={normalTextStyle}>
        Faith n Heal Physiotherapy and wellness zone is focused on providing personalized and professional physiotherapy and home health care services at your door step and allow quick and convenient recovery within the comfort of one’s home.

        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        We provide a wide range of services including Physiotherapy at Home, Home Nursing Care, Psychologist’s Consultation, Gynecologist’s consultation , Elderly Care, Doctor Visit at Home(Doctor’s consultation), Dietitian at Home, Ayurveda Consultation, Tele rehabilitation at home, Diagnostic services Medical Equipment’s Rent and Sell.

        </Typography>
        <Typography variant="body1" style={normalTextStyle}>
        Our goal is to deliver qualitative services, reduce costing, provide healthcare services at your door step with Swift recovery, Backed by our strong and experienced team.
        </Typography>
        </div>

        <Box position="relative" style={{marginTop:"5vh"}}>
      <Carousel
        autoPlay={true}
        interval={2000}
        animation='fade'
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button
              onClick={onClick}
              className={className}
              style={{
                ...style,
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                left: prev ? 0 : 'auto',
                right: next ? 0 : 'auto',
              }}
            >
              {next && <StyledNavigateNext />}
              {prev && <StyledNavigateBefore />}
            </Button>
          );
        }}
      >
        {slider.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
        </Box>
    </>
  );
}

export default Example;
