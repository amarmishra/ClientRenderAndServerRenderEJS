const mongoose = require('mongoose');   //importing mongoose

mongoose.connect('mongodb://127.0.0.1:27017/ToDo-list'); //connecting the mongoose with our localhost

const db = mongoose.connection; //checking the DB connection if there is any error

db.on('error', console.error.bind(console, 'error connecting to DB'));

db.once('open', function(){
    console.log('Successfully connected to the db server')
});