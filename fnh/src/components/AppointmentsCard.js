import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  FormControl,
  Select,
  Stack,
  MenuItem,
  InputLabel,
  Box,
  Button
} from '@mui/material';

const AppointmentsCard = () => {
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const res = await fetch("https://jwf0b50k-5000.inc1.devtunnels.ms/appointments");
    const result = await res.json();
    console.log(result);
  };

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    service: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/aboutus', formData)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <Box
        sx={{
          height: "auto",
          minWidth:"300px", 
          borderRadius: 2,
          backgroundColor: "#f0f0f0",
          marginTop: "35px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px", // Added padding to provide space between the content and the box edges
          
        }}
      >
        <Container>
          <Typography variant="h6" color="text.primary" sx={{ marginBottom: 2, display: 'flex', justifyContent: 'center', color:'#1f3557' }}>
            Book Your Appointments Now!
          </Typography>
          <Stack spacing={2}>
            <TextField id="name" size="small" label="Name" variant="outlined" name="name" onChange={handleChange} value={formData.name} />
            <Stack direction="row" spacing={3} justifyContent={"space-between"}>
              <TextField id="age" size="small" label="Age" type="number" InputProps={{ inputProps: { min: 1 } }} variant="outlined" fullWidth name="age" onChange={handleChange} value={formData.age} />
              <FormControl fullWidth size="small">
                <InputLabel id="lgender">Gender</InputLabel>
                <Select labelId="lgender" id="gender" name="gender" label="Gender" onChange={handleChange} value={formData.gender}>
                  <MenuItem value={"M"}>Male</MenuItem>
                  <MenuItem value={"F"}>Female</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <TextField id="address" label="Address" multiline rows={3} name="address" onChange={handleChange} value={formData.address} />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="lservice">Service Required</InputLabel>
              <Select labelId="lservice" id="service" name="service" label="Service Required" onChange={handleChange} value={formData.service}>
                <MenuItem value={"Physiotherapy"}>Physiotherapy</MenuItem>
                <MenuItem value={"Psychology Consultation"}>Psychology Consultation</MenuItem>
                <MenuItem value={"Diet Consultation"}>Diet Consultation</MenuItem>
                <MenuItem value={"Gynecologist’s Consultation"}>Gynecologist’s Consultation</MenuItem>
                <MenuItem value={"Ayurvedic Treatment"}>Ayurvedic Treatment</MenuItem>
                <MenuItem value={"Nursing Care at Home"}>Nursing Care at Home</MenuItem>
                <MenuItem value={"Care taker at Home"}>Care taker at Home</MenuItem>
                <MenuItem value={"Doctor’s Consultation"}>Doctor’s Consultation</MenuItem>
                <MenuItem value={"Medical Equipment’s"}>Medical Equipment’s</MenuItem>
                <MenuItem value={"Telerehabilitation"}>Telerehabilitation</MenuItem>
              </Select>
            </FormControl>
            <TextField id="phone" size="small" type="phone" label="Contact Number" variant="outlined" name="phone" onChange={handleChange} value={formData.phone} />
  
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
              <Button size="medium" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                Start Rehabilitation
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box> 
    </>
  );
}

export default AppointmentsCard;
