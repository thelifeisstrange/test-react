import React from 'react'
import { Link } from 'react-router-dom';
import footinssoleimg from '../assets/cardimgs/Insole.png'

const FootInsoleCard = () => {
  return (
    <Link to='/customisedfootinsoles'>
    <div style={{ width: '280px', height: '320px', borderRadius: '10px', backgroundColor: '#E8EEFF', overflow: 'hidden', padding:'18px 18px', display:'flex', justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', textAlign:'center' }}>
      <img
        src={footinssoleimg}
        alt="Physiotherapy Card"
        style={{ width: '100%', height: 'auto', objectFit: 'cover', marginTop:'20px' }}
      />
      <p style={{color: '#1f3557',
    fontSize: '1.5rem',
    fontWeight: 'bold', marginTop:'5px'}}>Customised Foot Insoles</p>
    </div>
    </Link>
  )
}

export default FootInsoleCard