import React, { useEffect, useState } from 'react';
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody, Button } from '@mui/material';
import EditModal from './EditModal';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/appointments');
        const data = await response.json();
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
    // fetchData();
  };

  const handleSaveChanges = (updatedAppointment) => {
    // Implement the logic to save changes to the backend
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === updatedAppointment.id ? updatedAppointment : appointment
    );
    setAppointments(updatedAppointments);
    handleCloseEditModal();
  };

  return (
    <div>
      <h2>Appointments</h2>
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* Add your table header cells here */}
            </TableRow>
          </TableHead>
          <TableBody>
  {appointments.map((appointment, index) => (
    <TableRow key={appointment.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component="th" scope="row">
        {index + 1} {/* Increment index by 1 to start from 1 */}
      </TableCell>
      <TableCell>{appointment.Name}</TableCell>
      <TableCell>{appointment.Age}</TableCell>
      <TableCell>{appointment.Gender}</TableCell>
      <TableCell>{appointment.Service}</TableCell>
      <TableCell>{appointment.Address}</TableCell>
      <TableCell>{appointment.Phone}</TableCell>
      <TableCell>{appointment.DateOfAppointment}</TableCell>
      <TableCell>{appointment.NumberOfSessions}</TableCell>
      <TableCell>{appointment.ReferralThrough}</TableCell>
      <TableCell>{appointment.NameOfTherapist}</TableCell>
      <TableCell>{appointment.Payment}</TableCell>
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
