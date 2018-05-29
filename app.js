var express = require('express');
var port = process.env.PORT || 3000; 

var todoController = require('./controller/todoController');
var app = express();

//setup template engine, muz create a 'views' folder
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))

//fire controller
todoController(app);

//listen to port
app.listen(port, function () {
    console.log('Listening to port ' + port);
});