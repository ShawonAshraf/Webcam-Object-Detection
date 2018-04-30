const express = require('express');
const hbs = require('hbs');
const resObj = require('./response-obj/response-obj');


const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// routes
app.get('/', (req, res) => {
    res.render('home.hbs', resObj.responseObject(
        'tfjs object detection',
        'home'
    ));
});

app.get('/bad', (req, res) => {
    res.status(400).send();
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});