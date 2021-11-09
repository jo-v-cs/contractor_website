const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Handle JSON requests
app.use(express.json());

// Automatically return static files
app.use(express.static("public"));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "template.html"));
});

app.get('/request', (req, res) => {
    res.sendFile(path.join(__dirname, "request.html"));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})