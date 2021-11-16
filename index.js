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
    db.run(`CREATE TABLE 
            IF NOT EXISTS orders(
                id INTEGER PRIMARY KEY,
                name TEXT,
                email TEXT,
                genre TEXT,
                numPlayers TEXT,
                quote TEXT)`);
});

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
    const order = req.body;
    //fs.writeFileSync('./db/db.json', order);
    db.run(`INSERT INTO orders(name, email, genre, numPlayers, quote)
            VALUES ("${order.name}", "${order.email}", "${order.genre}", "${order.numPlayers}", "${order.quote}")`);
    res.send(`Added new order`);
});

app.get('/request/orderData', (req, res) => {
    // Read db file
    const orders = [];
    let currentOrder = {};
    db.all(`SELECT * FROM orders`, (err, rows) => {
        if (rows) {
            rows.forEach((row, i) => {
                currentOrder.name = row.name;
                currentOrder.email = row.email;
                currentOrder.genre = row.genre;
                currentOrder.numPlayers = row.numPlayers;
                currentOrder.quote = row.quote;
                orders.push(currentOrder);
            });
        }
        res.send(orders);
    });
});
// Delete all entries in order table
app.delete('/request/orderData', (req, res) =>  {
    db.run(`DELETE FROM orders`);
    res.status(204).send();
});

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "about.html"));
});

app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "about.html"));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})