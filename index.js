const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

// Handle JSON requests
app.use(express.json());


router.get('/', (req, res) => {
    res.render('/index.html');
});

app.use('/', router);
app.listen(port, () => {
    console.log(`Contractor Website listening at http://localhost:${port}`);
})