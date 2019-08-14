var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');

let ticketsRouter = require('./routes/api/v1/tickets');
let bodyParser = require('body-parser');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/tickets', ticketsRouter);

//connect mongoose
// store credentials as enviroment variables
const dbuser = 'mlin1235';
const dbpass = 'Cool123456';

// TODO - Discuss connection uri
// Need to set mongoDB variable to the uri for your own database
const mongoDB = `mongodb+srv://${dbuser}:${dbpass}@cluster0-erc0i.mongodb.net/test?retryWrites=true`;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
