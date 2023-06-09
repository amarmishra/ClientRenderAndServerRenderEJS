const express = require('express');
const database = require('./config/mongoose');
const app = express();
const port = 1003;
// const myTasks = require('./models/todoSchema');
const router = require('./routes/index');

app.use(express.urlencoded());
app.use('/', router);
app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`encountered error: ${err}`);
        return;
    }

    console.log(`server Successfully connected on: ${port}`);
})



