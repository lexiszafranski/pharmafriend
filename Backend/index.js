// creates connections to express, mySQL, and cors
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());

// connecting to the mySQL database

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Pharmafriend" 
})


// returns to the page
app.get('/', (re, res)=> {
    return res.json("From Backend side");
})

// gets anything written to translate to the page
app.listen(8081, ()=> {
    console.log("listening");
})