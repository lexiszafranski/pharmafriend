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


function isValidInput(input) {
    return /^[a-zA-Z0-9@.-_]+$/.test(input);
}


// lets the user register and stores in the database
app.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!isValidInput(email)) {
        res.status(400).send('Invalid input: Please only use alphanumeric characters.');
        return;
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
        if (err) {
            res.status(500).send('Server error');
        } else if (results.length > 0) {
            // Email exists, proceed with login
            // Check password and send back user data
            if (results[0].password === password) {
                res.send({ userID: results[0].userID });
            } else {
                res.status(401).send('Invalid credentials');
            }
        } else {
            // Email does not exist, create a new user entry
            db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, password], (err, result) => {
                if (err) {
                    res.status(500).send('Server error');
                } else {
                    // User created successfully, send back user data
                    res.send({ userID: result.insertId });
                }
            });
        }
    });
});

// lets the user add medication and stores it in the database
app.post('/add-medication', (req, res) => {
    const name = req.body.name;
    const dose = req.body.dose;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const userID = req.body.userID;

    db.query("INSERT INTO medicineinfo (userID, prescriptionName, timesPerDay, startDate, endDate) VALUES (?, ?, ?, ?, ?)", 
    [userID, name, dose, start_date, end_date], (err, result) => {
        if (err) res.status(500).send('Failed to add medication');
            else res.send({ name, dose, start_date, end_date });
        });
});

app.get('/get-medications', (req, res) => {
    const { userID } = req.query;  
    db.query("SELECT * FROM medicineinfo WHERE userID = ?", [userID], (err, results) => {
        if (err) {
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

// updates the app
app.listen(4000, ()=> {
    console.log("listening on port 4000");
})