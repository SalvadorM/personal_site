const express = require('express');
const path = require('path');


//init app
const app = express();

//set to public folder
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8080;

//start the server
app.listen(port, function(){
  console.log('Server started in port: ' + port);
})

//routes
app.get('/', function(res, req){
  res.sendFile('index.html');
});

app.get('/project-001', function(res, req){
  res.sendFile('index-001.html');
});
