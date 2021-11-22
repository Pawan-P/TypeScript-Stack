const express = require('express');
const app = express();
const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/UserDetails')
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.error('Could not connect to MongoDB....'));

app.use(express.json());
app.use(require('./router/route'));



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to ${port}......`));