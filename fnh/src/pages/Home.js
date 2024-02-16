import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ImgSlider from '../components/ImgSlider';
import OurVision from '../components/OurVision';
import CardSwiper from '../components/CardSwiper';


function Home() {
  return (
    <div>

      <HeroSection />
      {/* <FormContainer /> */}
      <ImgSlider />
      <OurVision />
      
      <CardSwiper />
      <Testimonials />
      <AboutUs />
      <Footer />

    </div>
  );
}

export default Home;
