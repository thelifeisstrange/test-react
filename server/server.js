require("dotenv").config();

const express = require('express');
const cors = require('cors');
// const mysql = require('mysql2/promise');
const {sendEmail} = require('./controllers/emailControllers.js');


//firebase

const { doc, addDoc, collection, getDocs } = require('firebase/firestore');
const { firedb } = require('./firebase.js');

const firedbref = collection(firedb, 'faithnheal');




const app = express();

app.use(express.json());

app.use(cors());


// serve build folder as static
app.use(express.static("build"));
app.get("/", (req, res) => {
	res.sendFile("index.html");
});

// app.get("/main", (req,res) => {
//     const sql = "SELECT * FROM appointments";
//     db.query(sql, (err, data) => {
//         if(err) return res.json("Error");
//         return res.json(data);
//     })
// })


app.post("/aboutus", async (req, res) => {
  try {
    console.log(req.body);
    const { name, age , gender, address, service, phone } = req.body;

    // Insert data into the appointments table
    // const sql =
    //   "INSERT INTO appointments (name, dob, gender, address, service, phone) VALUES(?,?,?,?,?,?)";
    // const values = [name, dob, gender, address, service, phone];
    // await db.query(sql, values);

    // Send email
    const msg = `New Appointment Request \n Name: ${name} \n Age: ${age} \n Gender: ${gender} \n Address: ${address} \n Service: ${service} \n Phone: ${phone}`;
    // sendEmail(msg);

  
    //firebase 
    const addData = await addDoc(firedbref, { Name:name, Age:age , Gender:gender, Address:address, Service:service, Phone:phone })

    if(addData){
      console.log("Added Data to Firebase");
      sendEmail(msg);

      const sheetDbResponse = await fetch(process.env.SHEET_DB_API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [
            {
              'Name': name,
              'Age': age,
              'Gender': gender,
              'Address': address,
              'Service': service,
              'Phone': phone,
              'Mode':"Website"
            }
          ]
        })
      });

      const sheetDbData = await sheetDbResponse.json();
      console.log(sheetDbData);
    } else {
      console.log("Error while firebase adding");
    }

   

    // const values = [[name, age, gender, address, service, phone]];
    //   const request = {
    //     spreadsheetId: spreadsheetId,
    //     range: range,
    //     valueInputOption: 'USER_ENTERED',
    //     resource: { values: values }
    //   };

    //   sheets.spreadsheets.values.append(request, (err, response) => {
    //     if (err) {
    //       console.error('Error adding data to Google Sheets:', err);
    //     } else {
    //       console.log('Data added to Google Sheets:', response.data);
    //     }
    //   });

    // Send a single response after both database operations
    return res.status(201).json({ msg: "success", data: { name, age, gender, address, service, phone } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


// app.post("/adminchange", async (req, res) => {
//   try {
//     const { id, name, dateofapp, numberofapp, referralthrough, nameoftherapist, payment } = req.body;

//     // Update MySQL
//     const sql = "UPDATE appointments SET dateofapp=?, numberofapp=?, referralthrough=?, nameoftherapist=?, payment=? WHERE id=?";
//     const values = [dateofapp, numberofapp, referralthrough, nameoftherapist, payment, id];
//     await db.query(sql, values);

//     // Update Firestore
//     const appointmentDocRef = doc(firedb, 'faithnheal', id);
//     const updateData = {
//       dateofapp,
//       numberofapp,
//       referralthrough,
//       nameoftherapist,
//       payment,
//     };
//     await updateDoc(appointmentDocRef, updateData);

//     // Fetch the updated appointment from Firestore
//     const updatedAppointmentSnapshot = await getDocs(collection(firedb, 'faithnheal'));
//     const updatedAppointment = updatedAppointmentSnapshot.docs.map(doc => doc.data()).find(appointment => appointment.id === id);

//     res.json({ data: updatedAppointment });
//   } catch (error) {
//     console.error("Error updating appointment:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


app.get("/api/appointments", async (req, res) => {
  try {
    const appointmentsSnapshot = await getDocs(firedbref);
    const appointments = appointmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    res.json({ data: appointments });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

  

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
})