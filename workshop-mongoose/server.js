const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const colors=require('colors');
//db config
const mongodbconnection =require('./config/db');

const morgan=require('morgan');
//log
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//routes
require('./routes/routes')(app);

const PORT=3000;
app.listen(PORT, () => {
    console.log('Server running on port '.bgWhite+PORT.toString().bgWhite);
});