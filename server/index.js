const model = require('../db/model');
const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongoURI = 'mongodb+srv://hiitlist:hiit@cluster0-rt13x.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI, options);
const db = mongoose.connection
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/fit', (err, res) => {
    res.send(`let's get fit!`);
})

app.post('./fit', (err, res) => {
    res.send('there was an attempt to post!')
})

app.put('./fit/:id', (err, res) => {
    res.send('there was an attempt to put at an id!')
})

app.get('./fit/:id', (err, res) => {
    res.send('there was an attempt to get and id!')
})

app.delete('./fit/:id', (err, res) => {
    res.send('there was an attempt to delete at id!')
})


app.listen(port, console.log(`are you ready to run @ port ${port}?`))