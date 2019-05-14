

var express = require('express');

//creat our app

var app = express();
const PORT = process.env.PORT || 3000;

console.log("1 ");

app.use(function (req, res, next){
    if(req.protocol==='http' ){
        next();
    } else {
       res.redirect('http://' + req.hostname + req.url);
    }
});

console.log("3");
app.use(express.static('public'));

app.listen(PORT, function (){
    console.log('Express Server Is Up On Port ' + PORT);
});
