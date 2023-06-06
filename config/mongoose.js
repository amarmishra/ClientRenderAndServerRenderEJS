const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ToDo-list');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to DB'));

db.once('open', function(){
    console.log('Successfully connected to the db server')
});