import React, { useEffect, useState } from 'react';

import physioimg from '../assets/sliderimgs/physiotherapy.jpg';
import psychoimg from '../assets/sliderimgs/psychology.jpg';
import dietimg from '../assets/sliderimgs/diet.jpg';
import docconsultationimg from '../assets/sliderimgs/docconsultation.jpg';
import gynecimg from '../assets/sliderimgs/gynec.jpg';
import ayurvedaimg from '../assets/sliderimgs/ayurvedamarmaimg.jpg';
import nursingimg from '../assets/sliderimgs/nursingcare.jpg';
import elderlyimg from '../assets/sliderimgs/elderlycare.jpg';
import medequipimg from '../assets/sliderimgs/mediequipimg.jpg';
import diagnosimg from '../assets/sliderimgs/diagnostic.jpg';
import telerehabimg from '../assets/sliderimgs/tele-rehab.jpg';
import foootinsoeimg from '../assets/sliderimgs/footinsoleimg.jpg';

const ImgSlider = () => {
  const [selectedItem, setSelectedItem] = useState({
    imageIndex: 0,
    textIndex: 0,
  });

  const normalTextStyle = {
    color: '#1f3557',
    fontSize: '1.2rem',
    marginBottom:'10px',
    marginTop:'20px'
};

const isMobile = window.innerWidth <= 600; // You can adjust the breakpoint as needed

const imageStyle = {
  borderRadius: '8px',
  width: isMobile ? '90%' : '75%',
  height: isMobile ? '70%' : '65%',
};


  const allItems = [
    { image: physioimg, text: 'Physiotherapy Services' },
    { image: foootinsoeimg, text: 'Customised Foot Insoles' },
    { image: docconsultationimg, text: 'Doctor\'s Consultation' },
    { image: psychoimg, text: 'Psycologist\'s Consultation' },
    { image: dietimg, text: 'Diet Consultation' },
    { image: gynecimg, text: 'Gynecologist\'s Consultation' },
    { image: ayurvedaimg, text: 'Ayurvedic Treatment' },
    { image: nursingimg, text: 'Nursing Care At Home' },
    { image: elderlyimg, text: 'Care Taker at Home' },
    { image: medequipimg, text: 'Medical Equipments' },
    { image: diagnosimg, text: 'Medical Diagnostic Services' },
    { image: telerehabimg, text: 'Telerehabilitation' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedItem((prevSelectedItem) => {
        const newIndex =
          prevSelectedItem.imageIndex === allItems.length - 1
            ? 0
            : prevSelectedItem.imageIndex + 1;

        return {
          imageIndex: newIndex,
          textIndex: newIndex,
        };
      });
    }, 2500);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [allItems]);

  return (

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '5px',
        marginTop: '30px',
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'center',
      }}
    >
      <img
       style={imageStyle}
        src={allItems[selectedItem.imageIndex].image}
        alt={`Slider Image ${selectedItem.imageIndex}`}
      />
      <p style={normalTextStyle}>{allItems[selectedItem.textIndex].text}</p>
    </div>
  );
};

export default ImgSlider;
