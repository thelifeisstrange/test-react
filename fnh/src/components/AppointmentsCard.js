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
  Button,
  Alert,
  Snackbar,
  Slide
} from '@mui/material';

import { styled } from '@mui/system';
import { DatePicker} from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const ResponsiveBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 420px;
  border-radius: 20px;
  background-color: #f0f0f0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  margin-top: 30px;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    width: 330px;
  }
`;

const AppointmentsCard = () => {
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const res = await fetch("/appointments");
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

  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, age, gender, address, service, phone } = formData;

    // Check if all fields are filled
    if (!name || !age || !gender || !address || !service || !phone) {
        return false;
    }

    // Check if the phone number is valid
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.match(phoneRegex)) {
        return false;
    }
    return true;
};


  async function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
    axios.post("/aboutus", formData)
      .then((res) => {
        console.log(res);
        setAlert({ type: 'success', message: 'Appointment booked successfully!' });
      })
      .catch((err) => {
        console.log(err);
        setAlert({ type: 'error', message: 'Error submitting appointment. Please try again.' });
      });
      setFormData({
        name: "",
        age:"",
        gender: "",
        address: "",
        service: "",
        phone: "",
      });
    } else {
      setAlert({ type: 'error', message: 'Invalid form input. Please check your entries.' });
    }
  };

  const closeAlert = () => {
    setAlert(null);
  };


  // const [selectedDate, setSelectedDate] = useState(null);

	// const Date = () => {
	// 	const handleDateChange = (newValue) => {
  //     console.log("New date selected:", newValue);
  //     const formattedDate = newValue.toISOString().split('T')[0];
  //     setFormData({ ...formData, dob: formattedDate });
  //     setSelectedDate(newValue);
  // };

	// 	return <DatePicker label="Date Of Birth" sx={{ width: "100%" }} renderInput={(params) => <TextField {...params} />} value={selectedDate} onChange={handleDateChange} />;
	// };


  

  return (
    <><div>
      <ResponsiveBox>
        <Container maxWidth="sm"> {/* Limit width on larger screens */}
          <Typography variant="h6" color="text.primary" sx={{ marginBottom: 2, color: "#1f3557" }}>
            Book Your Appointment Now!
          </Typography>
          <Stack spacing={2}>
            <TextField id="name" size="small" label="Name" variant="outlined" name="name" required onChange={handleChange} value={formData.name} />
            <TextField id="age" size="small" label="Age" variant="outlined" name="age" required onChange={handleChange} value={formData.age} />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider> */}
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Date />
    </LocalizationProvider> */}
    
    
          

            
            <FormControl fullWidth size="small">
            
              <InputLabel id="lgender">Gender</InputLabel>
              <Select labelId="lgender" id="gender" name="gender" label="Gender" required onChange={handleChange} value={formData.gender}>
                <MenuItem value={"M"}>Male</MenuItem>
                <MenuItem value={"F"}>Female</MenuItem>
              </Select>
            </FormControl>
            <TextField id="address" label="Address" multiline rows={3} name="address" required onChange={handleChange} value={formData.address} />
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="lservice">Service Required</InputLabel>
              <Select labelId="lservice" id="service" name="service" label="Service Required"  required onChange={handleChange} value={formData.service}>
                <MenuItem value={"Physiotherapy"}>Physiotherapy</MenuItem>
                <MenuItem value={"Coutomised Foot Insoles"}>Customised Foot Insoles</MenuItem>
                <MenuItem value={"Psychology Consultation"}>Psychology Consultation</MenuItem>
                <MenuItem value={"Diet Consultation"}>Diet Consultation</MenuItem>
                <MenuItem value={"Gynecologist’s Consultation"}>Gynecologist’s Consultation</MenuItem>
                <MenuItem value={"Ayurvedic Treatment"}>Ayurvedic Treatment</MenuItem>
                <MenuItem value={"Nursing Care at Home"}>Nursing Care at Home</MenuItem>
                <MenuItem value={"Medical Diagnostic Services"}>Medical Diagnostic Services</MenuItem>
                <MenuItem value={"Care taker at Home"}>Care taker at Home</MenuItem>
                <MenuItem value={"Doctor’s Consultation"}>Doctor’s Consultation</MenuItem>
                <MenuItem value={"Medical Equipments"}>Medical Equipment’s</MenuItem>
                <MenuItem value={"Telerehabilitation"}>Telerehabilitation</MenuItem>
              </Select>
            </FormControl>
            <TextField id="phone" size="small" type="tel" label="Contact Number" variant="outlined" required name="phone" onChange={handleChange} value={formData.phone} />
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
              <Button size="medium" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                Start Your Rehab Now
              </Button>
              
            </Box>
            <Typography color="text.primary" sx={{ textAlign:'center',marginBottom: 2, color: "#1f3557" }}>
            *gdpr compliance*
          </Typography>
          </Stack>
        </Container>
      </ResponsiveBox>
      </div>
      <Snackbar
        open={Boolean(alert)}
        autoHideDuration={6000}
        onClose={closeAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Slide in={Boolean(alert)} direction="down">
          <Alert severity={alert?.type} onClose={closeAlert} sx={{ width: '100%', marginTop: 10 }}>
            {alert?.message}
          </Alert>
        </Slide>
      </Snackbar>
    </>
  );
};

export default AppointmentsCard;