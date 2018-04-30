import * as express from 'express';
import * as hbs from 'hbs';
import * as resObj from './response-obj/response-obj';


const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// maintenance middleware
app.use((req, res, next) => {
    res.render('maintenance.hbs', resObj.responseObject(
        'We\'ll be back soon, please drop by again!',
        'Site under maintenance'
    ));
});