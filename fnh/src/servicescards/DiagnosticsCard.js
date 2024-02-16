import React from 'react'
import { Link } from 'react-router-dom';
import diagnosticsimg from '../assets/cardimgs/diagnostic.png'

const DiagnosticsCard = () => {
  return (
    <Link to='/diagnosticservices'>
    <div style={{ width: '280px', height: '320px', borderRadius: '10px', backgroundColor: '#E8EEFF', overflow: 'hidden', padding:'18px 18px', display:'flex', justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', textAlign:'center' }}>
      <img
        src={diagnosticsimg}
        alt="Physiotherapy Card"
        style={{ width: '100%', height: 'auto', objectFit: 'cover', marginTop:'20px' }}
      />
      <p style={{color: '#1f3557',
    fontSize: '1.5rem',
    fontWeight: 'bold'}}>Medical Diagnostic Services</p>
    </div>
    </Link>
  )
}

export default DiagnosticsCard