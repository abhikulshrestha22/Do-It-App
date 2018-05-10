

var mongoose = require('mongoose');

var GoalSchema = mongoose.Schema({
    text:String
});  


var GoalModel = mongoose.model('Goal',GoalSchema);

module.exports = GoalModel;


// const goal = new GoalModel({name:'Play cricket'});
// goal.save().then(()=>{
//     console.log("goal added");
// }).catch((e)=>{
//     console.log(e);
// })