import React, { useEffect, useState } from 'react';
import {Paper, Table , TableCell, TableContainer, TableHead, TableRow, TableBody, Button} from '@mui/material'
import EditModal from './EditModal'; 

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/appointments');
        const data = await response.json();
        console.log('Data:', data); // Log the response data
        setAppointments(data.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleEditClick = (appointment) => {
    setSelectedAppointment(appointment);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setSelectedAppointment(null);
    setOpenEditModal(false);
    // Fetch updated data after closing modal
    fetchData();
  };

  const handleSaveChanges = (updatedAppointment) => {
    // Implement the logic to save changes to the backend
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === updatedAppointment.id ? updatedAppointment : appointment
    );
    setAppointments(updatedAppointments);
    handleCloseEditModal();
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      setAppointments(data.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div>
      <h2>Appointments</h2>
      <TableContainer component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Sr</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Age</b></TableCell>
            <TableCell><b>Gender</b></TableCell>
            <TableCell><b>Service Required</b></TableCell>
            <TableCell><b>Address</b></TableCell>
            <TableCell><b>Phone Number</b></TableCell>
            <TableCell><b>Date Of Appointments</b></TableCell>
            <TableCell><b>Number of Sessions</b></TableCell>
            <TableCell><b>Referral through</b></TableCell>
            <TableCell><b>Name of Therapist</b></TableCell>
            <TableCell><b>Payment</b></TableCell>
            <TableCell>
              <b>Actions</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {appointment.name}
              </TableCell>
              <TableCell align="right">{appointment.age}</TableCell>
              <TableCell align="right">{appointment.gender}</TableCell>
              <TableCell align="right">{appointment.service}</TableCell>
              <TableCell align='right'>{appointment.address}</TableCell>
              <TableCell align="right">{appointment.phone}</TableCell>
              <TableCell align="right">{appointment.dateofapp}</TableCell>
              <TableCell align="right">{appointment.numberofapp}</TableCell>
              <TableCell align="right">{appointment.referralthrough}</TableCell>
              <TableCell align="right">{appointment.nameoftherapist}</TableCell>
              <TableCell align="right">{appointment.numberofapp}</TableCell>
              <TableCell align="right">{appointment.payment}</TableCell>
              <TableCell>
              <Button onClick={() => handleEditClick(appointment)}>Edit</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <EditModal
        open={openEditModal}
        handleClose={handleCloseEditModal}
        handleSaveChanges={handleSaveChanges}
        selectedAppointment={selectedAppointment}
      />
      
    </div>
  );
};

export default AppointmentsList;
