const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongodbconnection =require('./config/db');

const morgan=require('morgan');
//log
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


const routes=require('./routes/routes')(app);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});