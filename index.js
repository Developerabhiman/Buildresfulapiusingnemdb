require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

//always make sure dont use - app.use('/api', routes) here because it shows error cannot acess app before initialization

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

//always initialize app.use() here 
app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

