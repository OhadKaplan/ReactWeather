

var express = require('express');

//creat our app

var app = express();

app.use(express.static('public'));

app.listen(3000, function (){
    console.log("Express Server Is Up On Port 3000");
});
