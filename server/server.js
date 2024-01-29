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

app.get("/admin", (req,res) => {
    const sql = "SELECT * FROM appointments";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
})


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


app.get("/appointments", async(req,res) => {

    const re = await db.query("select * from appointments");

    res.json({data: re[0][0]})
})

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
})