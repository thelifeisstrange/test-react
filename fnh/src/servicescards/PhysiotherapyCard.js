import React from 'react';
import { Link } from 'react-router-dom';
import physiocardimg from '../assets/cardimgs/physio.png';

const PhysiotherapyCard = () => {
  return (
    <Link to='/physiotherapy'>
    <div style={{ width: '280px', height: '320px', borderRadius: '10px', backgroundColor: '#E8EEFF', overflow: 'hidden', padding:'18px 20px', display:'flex', justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', textAlign:'center' }}>
      <img
        src={physiocardimg}
        alt="Physiotherapy Card"
        style={{ width: '100%', height: 'auto', objectFit: 'cover', marginTop:'20px'}}
      />
      <p style={{color: '#1f3557',
    fontSize: '1.5rem',
    fontWeight: 'bold', marginTop:'5px'}}>Physiotherapy Services</p>
    </div>
    </Link>
  );
};

export default PhysiotherapyCard;
