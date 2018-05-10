var express = require('express');
var router = express.Router();



const goalRoute = require('./goal');
const goalsRoute = require('./goals');
//console.log(goalRoute);
//route related to goal
router.use('/goal',goalRoute);
router.use('/goals',goalsRoute);

module.exports = router;

