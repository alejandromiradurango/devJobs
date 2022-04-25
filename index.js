const mongoose = require('mongoose');
require ('./config/db')

const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// Acces to the env variables
require('dotenv').config({ path: 'variables.env'})

//# Creating express app
const app = express();

//# Enable Handlebars 
app.engine('handlebars', 
engine({
    defaultLayout: 'layout',
    helpers: require('./helpers/handlebars')
}));

app.set('view engine', 'handlebars');

//# Charging static files
app.use(express.static(path.join(__dirname, 'public')));

//# Hold the session
app.use(cookieParser());

app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection})
}));

//# Calling Routes
app.use('/', router());

//# Launching server on port 5000
app.listen(process.env.PORT, () => {
    console.log('Running Server on Port 5000');
});