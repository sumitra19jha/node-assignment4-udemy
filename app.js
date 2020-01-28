const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const formRoutes = require('./routes/form');
const userRoutes= require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(formRoutes.routes);
app.use(userRoutes.routes);

app.listen(8000);


