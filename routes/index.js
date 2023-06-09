const express = require('express');
const router = express.Router();
const home = require('../controller/homeController');
const category = require('../controller/categoryController');

//creating a route for home page
router.get('/', home.homecontoller);

//creating a route to add the tasks to DB
router.post('/addTask', home.TaskAddition);

//creating a route to remove task from DB and render the remaining tasks
router.get('/remTaskByID/:DelArray', home.removeFromDB)

//creating a route to display all category tasks
router.get('/all', category.allTasks);

//creating a route to display personal category tasks
router.get('/personalTasks', category.personalTasks)

//creating a route to display work category tasks
router.get('/Work', category.workTasks);

//creating a route to display school category tasks
router.get('/School', category.schoolTasks);

//creating a route to display Home category tasks
router.get('/home', category.homeTasks);

//creating a route to display other category tasks
router.get('/other', category.other);



module.exports = router;