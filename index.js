const express = require('express');

const app = express();

const port = 3200;

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.listen(port);
