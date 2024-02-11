const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const {sendEmail} = require('./controllers/emailControllers.js')


const app = express();

app.use(express.json());

app.use(cors());
const db = mysql.createPool({
    host : "ls-29b37c8e6da88437a6afd34e7aa07751bed1f6dc.cnesccme20c5.ap-south-1.rds.amazonaws.com",
    user: "suyash",
    password : "faithandheal",
    database : "faith"
})

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


app.post("/aboutus", async(req,res) => {
    console.log(req.body);
    const { name, age, gender, address, service, phone} = req.body;
    const sql = "INSERT INTO appointments (name, age, gender, address, service, phone) VALUES(?,?,?,?,?,?)";
    const values = [
        name, age, gender, address, service, phone
    ]
    await db.query(sql, values)
    const msg = `New Appointment Request \n Name : ${name} \n age : ${age} \n gender : ${gender} \n address : ${address} \n service : ${service} \n phone : ${phone} `
    sendEmail(msg)
    res.json({data: {name, age, gender, address, service, phone}})
})

app.post("/adminchange", async (req, res) => {
  try {
    const { id, name ,dateofapp, numberofapp, referralthrough, nameoftherapist , payment } = req.body;
    const sql = "UPDATE appointments SET dateofapp=?, numberofapp=?, referralthorough=?, nameoftherapist=? ,payment=? WHERE id=?";
    const values = [dateofapp, numberofapp, referralthrough, nameoftherapist , payment, id];

    await db.query(sql, values);

    const updatedAppointment = await db.query("SELECT * FROM appointments WHERE id=?", [id]);

    // const msg = `Appointment Updated \n Name : ${name} \n ID: ${id} \n Date of Appointment: ${dateofapp} \n Number of Appointments: ${numberofapp} \n Payment: ${payment}`;
    // sendEmail(msg);

    res.json({ data: updatedAppointment[0][0] });
  } catch (error) {
    console.error("Error updating appointment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/api/appointments", async (req, res) => {
    try {
      const result = await db.query("SELECT * FROM appointments");
      res.json({ data: result[0] });
    } catch (error) {
      console.error("Error fetching appointments:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
})