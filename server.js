var express = require('express');
var mongoose =require('mongoose');
var User = require('./models/user');
var app = express();
var bodyParser = require('body-parser');

//this is for using postman
app.use(bodyParser.json());

//mongodb local, default port, name of database
mongoose.connect('mongodb://localhost:27017/psiUserDb');

app.get('/user', function(req, res){
  //this is like our select in SQL
  User.find({},function(err, userResults){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else {
      console.log('new user created');
      res.send(userResults);
    }

  });

});

app.post('user', function(req, res){
  console.log('in users', req.body);

  var newUser = new User({
    name: req.body.name,
    username: req.body.username
    //age: req.body.age, etc

  });

  //insert/create
  newUser.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else {
      console.log('new user created');
      res.sendStatus(201);
    }

  });

  res.sendStatus(200);
});

app.listen(3004, function(){
  console.log('listening on 3004!');
});
