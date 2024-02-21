const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test");

var todoSchema = mongoose.Schema({title:String,description:String,completed:String});

var Todos = mongoose.model('todos', todoSchema)


module.exports = {Todos};



