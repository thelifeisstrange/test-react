import React from 'react'
import { Link } from 'react-router-dom';
import telerahabcardimg from '../assets/cardimgs/telerehab.png'

const TeleRehabCard = () => {
  return (
    <Link to='/telere'>
    <div style={{ width: '280px', height: '320px', borderRadius: '10px', backgroundColor: '#E8EEFF', overflow: 'hidden', padding:'18px 18px', display:'flex', justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', textAlign:'center' }}>
      <img
        src={telerahabcardimg}
        alt="Physiotherapy Card"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <p style={{color: '#1f3557',
    fontSize: '1.5rem',
    fontWeight: 'bold', marginTop:'5px'}}>Telerehabilitation</p>
    </div>
    </Link>
  )
}

export default TeleRehabCard