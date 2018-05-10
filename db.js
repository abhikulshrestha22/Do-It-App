const mongoose = require('mongoose');

mongoose.connect('mongodb://abhikulshrestha22:doitapp@ds219130.mlab.com:19130/doitapp');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function(){
    console.log("we are connected");
})

module.exports = mongoose;