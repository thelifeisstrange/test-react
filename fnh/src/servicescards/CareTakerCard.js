import React from 'react'
import { Link } from 'react-router-dom';
import caretakerimg from '../assets/cardimgs/elderly.png'

const CareTakerCard = () => {
  return (
    <Link to='/caretaker'>
    <div style={{ width: '280px', height: '320px', borderRadius: '10px', backgroundColor: '#E8EEFF', overflow: 'hidden', padding:'18px 18px', display:'flex', justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', textAlign:'center' }}>
      <img
        src={caretakerimg}
        alt="Physiotherapy Card"
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <p style={{color: '#1f3557',
    fontSize: '1.5rem',
    fontWeight: 'bold', marginTop:'5px'}}>Care Taker At Home</p>
    </div>
    </Link>
  )
}

export default CareTakerCard