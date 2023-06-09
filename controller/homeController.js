const myTasks = require('../models/todoSchema');


module.exports.homecontoller = async function (req, res) {
    let mytaskList = await myTasks.find({});
    res.render('home', {
        Alltask: mytaskList
    });
}

module.exports.TaskAddition = function (req, res) {
    myTasks.create({
        task: req.body.task,
        category: req.body.category,
        due: req.body.due
    })
    res.redirect('back');
}



module.exports.removeFromDB = async function (req, res) {
    let ids = req.params.DelArray.split(',');

    for (let i of ids) {
        await myTasks.findByIdAndDelete({ _id: i });
    }
    res.redirect('back');
}

module.exports.allTasks = async function (req, res) {
    let mytaskList = await myTasks.find({task:'Afred'});
    res.render('home', {
        Alltask: mytaskList
    });
    console.log(mytaskList);
}

module.exports.personalTasks = async function (req, res) {
    let personalTaskList = await myTasks.find({ category: 'Personal' });
    res.render('home', {
        Alltask: personalTaskList
    });
}

module.exports.workTasks = async function (req, res) {
    let workTaskList = await myTasks.find({ category: 'Work' });
    res.render('home', {
        Alltask: workTaskList
    });
}

module.exports.schoolTasks = async function (req, res) {
    let schoolTaskList = await myTasks.find({ category: 'School' });
    res.render('home', {
        Alltask: schoolTaskList
    });
}

module.exports.homeTasks = async function (req, res) {
    let homeTaskList = await myTasks.find({ category: 'home' });
    res.render('home', {
        Alltask: homeTaskList
    });
}

module.exports.other = async function(req,res){
    let othertaskList = await myTasks.find({category:'other'});
    res.render('home', {
        Alltask : othertaskList
    })
}