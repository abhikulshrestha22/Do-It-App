var express = require('express');
var router = express.Router();



const goalRoute = require('./goal');
//console.log(goalRoute);
//route related to goal
router.use('/goal',goalRoute);

module.exports = router;

