const GoalModel = require('../models/goal');
var express = require('express');
var router = express.Router();

    
    router.post('/addGoal',(req,res)=>{
        console.log(" in addGoal route")

        var newGoal = new GoalModel({text:req.body.text});

        newGoal.save(function(err,newGoal){
            if(err){
                //return err;
                res.send({
                    status:'failed',
                    error:err
                })
            }
            res.send({
                status:'succeeded'
            })
            console.log("goal saved");
        })

        //console.log(req.body);
        //res.send("api working");
        })

    

module.exports = router;