// Navbar.js

import React from 'react';
import roundlogo from '../assets/Subject.png';
import rectmainlogo from '../assets/LogoMain.png'

function Navbar() {

  return (
    
    <div>
      <div className='upperbar' style={{width:'100%', height:'5px', backgroundColor:'#1f3557'}}></div>
      <div style={{ width:'100%', height:'80px', padding:'6px 15px', display:'flex'}}> 
        <img src={roundlogo} alt='roundlogo' style={{height:'90%', marginLeft:'5px', marginTop:'5px'}}/>
        <img src={rectmainlogo} alt='Logo'style={{height:'90%', marginTop:'5px'}} />
      </div>
    </div>
    
  );
}

export default Navbar;
