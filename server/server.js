require("dotenv").config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const {sendEmail} = require('./controllers/emailControllers.js');
const mongoose = require('mongoose');


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


app.post("/aboutus", async (req, res) => {
  try {
    console.log(req.body);
    const { name, age, gender, address, service, phone } = req.body;

    // Insert data into the appointments table
    const sql =
      "INSERT INTO appointments (name, age, gender, address, service, phone) VALUES(?,?,?,?,?,?)";
    const values = [name, age, gender, address, service, phone];
    await db.query(sql, values);

    // Send email
    const msg = `New Appointment Request \n Name: ${name} \n Age: ${age} \n Gender: ${gender} \n Address: ${address} \n Service: ${service} \n Phone: ${phone}`;
    sendEmail(msg);

    // Create a document in the Rehab collection
    const rehabRequest = await Rehab.create({
      name,
      age,
      gender,
      address,
      service,
      phone,
    });

    console.log("rehabRequest result", rehabRequest);

    // Send a single response after both database operations
    return res.status(201).json({ msg: "success", data: { name, age, gender, address, service, phone } });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/adminchange", async (req, res) => {
  try {
    const { id, name ,dateofapp, numberofapp, referralthrough, nameoftherapist , payment } = req.body;
    const sql = "UPDATE appointments SET dateofapp=?, numberofapp=?, referralthrough=?, nameoftherapist=? ,payment=? WHERE id=?";
    const values = [dateofapp, numberofapp, referralthrough , nameoftherapist , payment, id];

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

  app.get("/api/mongotest", async (req, res) => {
    try {
      const allRehabRequest = await Rehab.find({});
      const htm = `
        <ul>
          ${allRehabRequest
            .map((rehab) => `<li>${rehab.name} - ${rehab.service}</li>`)
            .join("")}
        </ul>`;
  
      res.send(htm);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
})

mongoose.connect("mongodb+srv://faithnheal15:yKp8byXHBjPqrYig@faithdb.hjorm9j.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Mongodb connected"))
.catch((err) => console.log("Mongo Error", err));


const faithnhealSchema = new mongoose.Schema({
  id : {
    type : Number,
  },
  name : {
    type : String,
  },
  age : {
    type : String,
  },
  gender : {
    type : String,
  },
  address : {
    type : String,
  },
  service : {
    type : String,
  },
  phone : {
    type : String,
  },

},
{
  timestamps : true
});

const Rehab = mongoose.model('rehab', faithnhealSchema);