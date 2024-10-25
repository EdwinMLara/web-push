require('dotenv').config();

const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express();

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes

app.use(require('./routes/index'));

//static content
app.use(express.static(path.join(__dirname,'public')));

const port = process.env.SERVER_PORT;
app.listen(port,()=>{
    console.log(`server runnig over port ${port}`)
});