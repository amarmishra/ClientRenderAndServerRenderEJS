const myTasks = require('../models/todoSchema');

//rendering the home page with the data present in the DB
module.exports.homecontoller = async function (req, res) {
    let mytaskList = await myTasks.find({});        //find method is used to get all the data present in DB. 
    res.render('home', {
        Alltask: mytaskList
    });
}


//Adding the task into the DB by collecting the input, category and date values provided in the frontend.
module.exports.TaskAddition = function (req, res) {
    myTasks.create({
        task: req.body.task,
        category: req.body.category,
        due: req.body.due
    })
    res.redirect('back');       //After adding the data to the DB, we redirect back to home page where the data is displayed
}


//Deleting the selected Task from the DB and displaying the remaining tasks on the home page
module.exports.removeFromDB = async function (req, res) {
    let ids = req.params.DelArray.split(',');   //here we use query params to get the ID of the selected Task and we remove it from DB.

    for (let i of ids) {
        await myTasks.findByIdAndDelete({ _id: i });
    }
    res.redirect('back');
}

