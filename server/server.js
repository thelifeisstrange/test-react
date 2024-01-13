const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');


const app = express();

app.use(express.json());

app.use(cors());

const db = mysql.createPool({
    host : "localhost",
    user: "root",
    password : "kulkarni",
    database : "faith"
})

app.get("/admin", (req,res) => {
    const sql = "SELECT * FROM appountments";
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
    res.json({data: {name, age, gender, address, service, phone}})
})


app.get("/appointments", async(req,res) => {

    const re = await db.query("select * from appointments");

    res.json({data: re[0][0]})
})

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
})