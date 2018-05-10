const GoalModel = require('../models/goal');
var express = require('express');

var router = express.Router();


router.get('/getgoals',(req,res)=>{
    GoalModel.find({},function(err,goals){
        if(err){
            res.send({
                status:'failed',
                error:err
            });
        }
        res.send({
            status:'succeeded',
            result:goals
        });
    })
})

module.exports = router;