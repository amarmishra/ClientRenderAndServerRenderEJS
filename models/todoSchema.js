const mongoose = require('mongoose');   //importing mongoose connection

const TodoSchema = new mongoose.Schema({    //creating a schema which will store the data in the required structure
    task:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required:true
    },
    due:{
        type: Date,
        required: true
    }
})

const myTasks = mongoose.model('tasks_Todolist', TodoSchema);   //specifying the name of the table which displays in the DB
 module.exports = myTasks;      //exporting the Schema