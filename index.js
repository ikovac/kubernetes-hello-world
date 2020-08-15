const express = require('express');
const os = require('os');

const app = express();

app.use('/', (req, res) => {
    res.send(`Hello world from ${os.hostname()}`);
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});