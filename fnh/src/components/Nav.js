import React, { useState } from 'react';

const Nav = () => {
  const [isMobile, setMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobile(!isMobile);
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
  };

  const logoStyle = {
    fontSize: '1.5rem',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
  };

  const navLinkItemStyle = {
    marginRight: '1rem',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  const mobileNavLinksStyle = {
    display: 'none',
    flexDirection: 'column',
    width: '100%',
    position: 'absolute',
    top: '60px',
    left: '0',
    backgroundColor: '#333',
    textAlign: 'center',
  };

  if (isMobile) {
    mobileNavLinksStyle.display = 'flex';
  }

  const menuIconStyle = {
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'none',
  };

  if (window.innerWidth <= 768) {
    navLinksStyle.display = 'none';
    menuIconStyle.display = 'block';
  }

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Your Logo</div>
      <ul style={isMobile ? { ...navLinksStyle, ...mobileNavLinksStyle } : navLinksStyle}>
        <li style={navLinkItemStyle}><a style={navLinkStyle} href="#home">Home</a></li>
        <li style={navLinkItemStyle}><a style={navLinkStyle} href="#about">About</a></li>
        <li style={navLinkItemStyle}><a style={navLinkStyle} href="#services">Services</a></li>
        <li style={navLinkItemStyle}><a style={navLinkStyle} href="#contact">Contact</a></li>
      </ul>
      <div style={menuIconStyle} onClick={toggleMobileMenu}>
        {isMobile ? '✕' : '☰'}
      </div>
    </nav>
  );
};

export default Nav;
