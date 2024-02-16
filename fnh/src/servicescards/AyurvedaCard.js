import React from 'react'
import { Link } from 'react-router-dom';
import ayurvedacardimg from '../assets/cardimgs/ayurveda.png'

const AyurvedaCard = () => {
  return (
    <Link to='/ayurveda'>
    <div style={{ width: '280px', height: '320px', borderRadius: '10px', backgroundColor: '#E8EEFF', overflow: 'hidden', padding:'18px 18px', display:'flex', justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', textAlign:'center' }}>
      <img
        src={ayurvedacardimg}
        alt="Physiotherapy Card"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <p style={{color: '#1f3557',
    fontSize: '1.5rem',
    fontWeight: 'bold', marginTop:'5px'}}>Ayurvedic Treatment</p>
    </div>
    </Link>
  )
}

export default AyurvedaCard