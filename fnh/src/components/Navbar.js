// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Subject.png';
// import { ReactComponent as LogoSVG } from './path/to/your/logo.svg';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const logoContainerStyle = {
    display: 'flex',    
    // justifyContent:'space-between',
    width: '100%', // Adjusted to fill the container
  };

  const squareLogoStyle = {
    height: '100%', // Maintain aspect ratio
    marginLeft:"50px",
    marginRight: '10px', // Adjust the margin as needed
  };
 

  const rectangularLogoStyle = {
    height: '100%', // Maintain aspect ratio
    marginRight: '7px', // Adjust the margin as needed
  };



  return (
    <nav className='navbar'>
      <div className='upperNavbar' style={{width:"100%", height:'5px', backgroundColor:'#1f3557'}}></div>
      <div className='navbar-container' style={{ width: '100%', height: '70px', display:"flex", padding:"5px"}}>
          <div>
            <img src={logo} alt='Faith and Health Logo' className='logo-image' style={squareLogoStyle} />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/982200134693691432/1195629151550460045/LogoMain.png?ex=65b4af6b&is=65a23a6b&hm=ddbc7b949e38c894eaaf5b2c3498fcd97818794d77dfbbd6e10897a362ad46bf&"
              alt='Faith and Health Logo'
              className='second-logo-image'
              style={rectangularLogoStyle}
            />
          </div>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        {/* <div className='upperNavbar' style={{width:"100%", height:'10px', backgroundColor:'#1f3557'}}></div> */}
    </nav>
  );
}

export default Navbar;
