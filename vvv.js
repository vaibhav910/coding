var express = require('express');
var app = express();
var PORT=3003;
var path = require('path');
var bodyParser = require('body-parser');
var knockknock = require('knock-knock-jokes');

app.use('/public',express.static(path.join(__dirname,'/public')));
var public = path.join(__dirname,'/public/');
app.use(bodyParser.urlencoded({extended: true}));

console.log(public);

app.get('/', function (req, res) {
    console.log(path.join(__dirname,'/public'));
  res.sendFile(public+"vv.html");
});
app.get('/jokes',function(req,res){
  res.send(knockknock());
});

app.post("/print", function (req, res) {
  var name=req.body.nam;
  var age = req.body.age;
  console.log(name,age);
  var object = {
      "Name": name, 
      "Age": age
  };
  res.json(object);
});

  
  app.get('/*', function (req, res) {
    res.sendstatus(200);
  });
  
 
app.listen(PORT, function(){
    console.log("serving on port"+PORT);
});