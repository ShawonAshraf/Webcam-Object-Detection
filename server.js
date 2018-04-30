import * as express from 'express';
import * as hbs from 'hbs';


const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + 'public'));

// maintenance middleware
app.use((req, res, next) => {
    res.render('maintenance.hbs');
});