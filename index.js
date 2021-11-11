const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Handle JSON requests
app.use(express.json());

// Automatically return static files
app.use(express.static("public"));

// Use router object
let router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "template.html"));
});

router.get('/request', (req, res) => {
    res.sendFile(path.join(__dirname, "request.html"));
});
router.post('/request', (req, res) => {
    let name = req.body.name;
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})