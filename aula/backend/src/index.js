const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb+srv://ygohamon:ygohamon@cluster0-tzrqe.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(require('./routes'));

app.listen(5555);


