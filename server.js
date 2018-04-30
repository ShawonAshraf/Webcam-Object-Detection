const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

// load the static file on load
// since all the processing will be done on server side
app.use('', express.static(__dirname + '/dist'));

// routes
app.get('/bad', (req, res) => {
    res.status(400).send();
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});