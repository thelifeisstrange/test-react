// EditModal.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const EditModal = ({ open, handleClose, handleSaveChanges, selectedAppointment }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const [formData, setFormData] = useState({
    dateofapp: "",
    numberofapp: "",
    referralthrough: "",
    nameoftherapist: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSave(event) {
    event.preventDefault();
    // Use the selectedAppointment.id to identify the specific appointment to update
    formData.id = selectedAppointment.id;
    formData.name=selectedAppointment.name;

    axios.post("/adminchange", formData)
      .then((res) => {
        console.log(res);
        // Call the parent component's handleSaveChanges to update the state or perform any other necessary actions
        handleSaveChanges(res.data);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginBottom:"9px"}}>
          Add New Values for `{formData.name}`
        </Typography>
        <form>
          <TextField
            label="Date of Appointment"
            name="dateofapp"
            value={formData.dateofapp}
            onChange={handleChange}
            style={{marginBottom:"9px"}}
          />
          <TextField
            label="Number of Appointments"
            name="numberofapp"
            value={formData.numberofapp}
            onChange={handleChange}
            style={{marginBottom:"9px"}}
          />
          <TextField
            label="Referral Through"
            name="referralthrough"
            value={formData.referralthrough}
            onChange={handleChange}
            style={{marginBottom:"9px"}}
          />
          <TextField
            label="Therapist's Name"
            name="nameoftherapist"
            value={formData.nameoftherapist}
            onChange={handleChange}
            style={{marginBottom:"9px"}}
          />
          <TextField
            label="Payment"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
          />
          <Button onClick={handleSave}>
            Save Changes
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditModal;
