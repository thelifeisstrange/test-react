import React from 'react';
import Slider from "react-slick";

// Import your card components here
import DietCard from '../servicescards/DietCard';
import GynecCard from '../servicescards/GynecCard';
import AyurvedaCard from '../servicescards/AyurvedaCard';
import FootInsoleCard from '../servicescards/FootInsoleCard';
import PhysiotherapyCard from '../servicescards/PhysiotherapyCard';
import PsychologyCard from '../servicescards/PsychologyCard';
import NursingCareCard from '../servicescards/NursingCareCard';
import DiagnosticsCard from '../servicescards/DiagnosticsCard';
import CareTakerCard from '../servicescards/CareTakerCard';
import TeleRehabCard from '../servicescards/TeleRehabCard';
import MedicalEquipmentsCard from '../servicescards/MedicalEquipmentsCard';


const CardSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false
              }
            }
          ]
    };

    const headingStyle = {
        color: '#1f3557',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:"20px"
      };

  return (
    <div style={{ margin: '20px auto', width: '75%' }}>
      
        <p style={headingStyle}>
        Our Services
        </p>
         
        <p style={{textAlign:'center',color: '#1f3557', fontSize: '1.2rem', marginBottom:'16px'}}>
           &lt; - Click to View Description - &gt; </p>    
                 
    <Slider {...settings}>
    
      <div>
        <div className='img-fluid'><PhysiotherapyCard /></div>
      </div>
      <div>
        <div className='img-fluid'><FootInsoleCard /></div>
      </div>
      <div>
        <div className='img-fluid'><PsychologyCard /></div>
      </div>
      <div>
        <div className='img-fluid'><DietCard /></div>
      </div>
      <div>
        <div className='img-fluid'><AyurvedaCard /></div>
      </div>
      <div>
        <div className='img-fluid'><GynecCard /></div>
      </div>
      <div>
        <div className='img-fluid'><NursingCareCard /></div>
      </div>
      <div>
        <div className='img-fluid'><CareTakerCard /></div>
      </div>
      <div>
        <div className='img-fluid'><MedicalEquipmentsCard /></div>
      </div>
      <div>
        <div className='img-fluid'><DiagnosticsCard /></div>
      </div>
      <div>
        <div className='img-fluid'><TeleRehabCard /></div>
      </div>
    </Slider>
    
    </div>
  );
};

export default CardSlider;
