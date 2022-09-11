const express = require('express');
//const { default: mongoose } = require('mongoose');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeurls = require('./routes/routes');

const cors = require('cors');

dotenv.config;
mongoose.connect("mongodb+srv://Sanjiv:Sanjiv@cluster0.wkkyvoy.mongodb.net/mytable?retryWrites=true&w=majority", ()=> console.log("Database Connected"))

app.use(express.json());
app.use(cors());
app.use('/app',routeurls);

app.listen(4000,() =>{console.log("server in running")})