const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

// Sqlite3
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db//orders.db');
// Avoid race condition
db.serialize(function() {
    db.run(`CREATE TABLE orders(name,
        email,
        genre,
        numPlayers,
        quote)`)
})

let contractRepo = require('./repos/contractRepo');
let contracts = contractRepo.get();

// Handle JSON requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Automatically return static files
app.use(express.static("public"));

// Routes
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "template.html"));
});
app.post('/', (req, res) => {
    res.send("Received POST request");
});

app.get('/request', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "request.html"));
});
app.post('/request', (req, res) => {
    const body = req.body;
    let order = JSON.stringify(body);
    fs.writeFileSync('./db/db.json', order);
    res.send(`Added ${order}`);
});

app.get('/request/orderData', (req, res) => {
    // Read db file
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(404).send();
        }
        else {
            res.status(200).send(data);
        }
    })
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "about.html"));
});

app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "about.html"));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})