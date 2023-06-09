const myTasks = require('../models/todoSchema');


//Rendering the tasks based on all the type of categories
module.exports.allTasks = async function (req, res) {
    let mytaskList = await myTasks.find({task:'Afred'});
    res.render('home', {
        Alltask: mytaskList
    });
    console.log(mytaskList);
}

//rendering the tasks based on personal category
module.exports.personalTasks = async function (req, res) {
    let personalTaskList = await myTasks.find({ category: 'Personal' });
    res.render('home', {
        Alltask: personalTaskList
    });
}


//rendering the tasks based on work category
module.exports.workTasks = async function (req, res) {
    let workTaskList = await myTasks.find({ category: 'Work' });
    res.render('home', {
        Alltask: workTaskList
    });
}

//rendering the tasks based on school category

module.exports.schoolTasks = async function (req, res) {
    let schoolTaskList = await myTasks.find({ category: 'School' });
    res.render('home', {
        Alltask: schoolTaskList
    });
}

//rendering the tasks based on home category

module.exports.homeTasks = async function (req, res) {
    let homeTaskList = await myTasks.find({ category: 'home' });
    res.render('home', {
        Alltask: homeTaskList
    });
}

//rendering the tasks based on other category

module.exports.other = async function(req,res){
    let othertaskList = await myTasks.find({category:'other'});
    res.render('home', {
        Alltask : othertaskList
    })
}