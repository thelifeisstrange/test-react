import React from 'react'
import AppointmentsCard from './AppointmentsCard'
import appointmentbackground from '../assets/formbackground.jpg'

const FormContainer = () => {

  const headingStyle = {
    color: '#ffffff',
    fontSize: '2.6rem',
    fontWeight: 'bold', 
  };

  const subheadingStyle = {
    color: '#ffffff',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };


  return (
    <div style={{ width: '100%', backgroundImage: `url(${appointmentbackground})`, backgroundSize: 'fill', backgroundRepeat: 'no-repeat' }}>
      <div>
      <AppointmentsCard />
      </div>
      <div>
            <p style={headingStyle}>
              Faith And Heal Physiotherapy And Wellness Zone
            </p>
            <p style={subheadingStyle}>
              Healthcare Services At Your Doorstep
            </p>
      </div>
    </div>
  )
}

export default FormContainer