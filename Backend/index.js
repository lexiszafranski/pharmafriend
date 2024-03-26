// creates connections to express, mySQL, and cors
require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(express.json())
app.use(cors({
    origin: [],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// connecting to the mySQL database
const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
})

// lets the user register and stores in the database
app.post('/register', (req, res) => {
    const{email, password} = req.body;

    db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).send("Error registering new user");
        } else {
            res.send("User registered successfully!");
        }
    });
});

// lets the user add medication and stores it in the database
app.post('/add_Medication', (req, res) => {
    const{prescriptionName, timesPerDay, startDate, endDate} = req.body;

    db.query('INSERT INTO medicineinfo (prescriptionName, timesPerDay, startDate, endDate) VALUES (?, ?, ?, ?, ?)',
    [prescriptionName, timesPerDay, startDate, endDate], (err, result) => {
        if(err) {
            console.log(err);
            res.status(500).send("Error adding medication");
        } else {
            res.send("Medication added successfully!");
        }
    });
});



// updates the app
app.listen(process.env.PORT, ()=> {
    console.log("listening on port", process.env.PORT);
})