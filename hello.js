var express= require('express');
var app=express();
app.use(express.static('public'));// use my this folder where all my static files like html css are stored
app.listen(3000,function(){
    console.log('server is ready');
})