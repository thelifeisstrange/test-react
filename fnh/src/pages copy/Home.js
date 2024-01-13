import React from 'react';
import '../App.css';
// import Cards from '../components/Cards';
// import HeroSection from '../components/HeroSection';
// import Footer from '../components/Footer';
import AppointmentsCard from '../components/AppointmentsCard';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Example from '../components/Carousel';
import Cards from '../components/Cards';

function Home() {
  return (
    <div>

     <HeroSection />
     {/* <AppointmentsCard /> */}
     <Example />
      <Cards />
     <Footer />
      
      
    </div>
  );
}

export default Home;
