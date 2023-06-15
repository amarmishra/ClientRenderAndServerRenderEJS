const express = require('express');     //importing express JS
const database = require('./config/mongoose');  //importing the DB connection
const app = express();          //creating app server
const port = 2000;              //initialising the port where the server will start running.
const router = require('./routes/index');   //importing the routes file, where the APIs are created.

app.use(express.urlencoded());
app.use('/', router);
app.use(express.static('./assets'));
app.set('view engine', 'ejs');      //setting the view engine
app.set('views', './views');        // setting the views path to render the ejs files from views directory


app.listen(port, function(err){     //making the server to run on the given port
    if(err){
        console.log(`encountered error: ${err}`);
        return;
    }

    console.log(`server Successfully connected on: ${port}`);
})



