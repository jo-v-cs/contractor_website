const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//const http = require('http');

let contractRepo = require('./repos/contractRepo');

let contracts = contractRepo.get();

// Handle JSON requests
app.use(express.json());

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
    res.send(body);
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