import React from 'react'
import { Link } from 'react-router-dom';
import gyneccardimg from '../assets/cardimgs/gynec.png'

const GynecCard = () => {
  return (
    <Link to='/gynecology'>
    <div style={{ width: '280px', height: '320px', borderRadius: '10px', backgroundColor: '#E8EEFF', overflow: 'hidden', padding:'20px 20px', display:'flex', justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', textAlign:'center' }}>
      <img
        src={gyneccardimg}
        alt="Physiotherapy Card"
        style={{ width: '100%', height: 'auto', objectFit: 'cover', marginTop:'20px' }}
      />
      <p style={{color: '#1f3557',
    fontSize: '1.5rem',
    fontWeight: 'bold', marginTop:'5px'}}>Gynecologist's Consultation</p>
    </div>
    </Link>
  )
}

export default GynecCard