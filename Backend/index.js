// creates connections to express, mySQL, and cors

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// connecting to the mySQL database with pool connection
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Fropguh@!155',
    database: "Pharmafriend"
})

// lets the user register and stores in the database
app.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
   db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send({email: email})
        }
   })
})

// lets the user add medication and stores it in the database
app.post('/add-medication', (req, res) => {
    const name = req.body.name;
    const dose = req.body.dose;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;

    db.query("INSERT INTO medicineinfo (prescriptionName, timesPerDay, startDate, endDate) VALUES (?, ?, ?, ?)", 
    [name, dose, start_date, end_date], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send({name: name, dose: dose, start_date: start_date, end_date: end_date})
        }
    })
})



// updates the app
app.listen(4000, ()=> {
    console.log("listening on port 4000");
})