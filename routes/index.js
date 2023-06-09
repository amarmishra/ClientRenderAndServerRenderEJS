const express = require('express');
const router = express.Router();
const hc = require('../controller/homeController');


router.get('/', hc.homecontoller);
router.post('/addTask', hc.TaskAddition);
router.get('/all', hc.allTasks);
router.get('/personalTasks', hc.personalTasks)
router.get('/Work', hc.workTasks);
router.get('/School', hc.schoolTasks);
router.get('/home', hc.homeTasks);
router.get('/other', hc.other);
router.get('/remTaskByID/:DelArray', hc.removeFromDB)


module.exports = router;