const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
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

const myTasks = mongoose.model('tasks_Todolist', TodoSchema);
 module.exports = myTasks;