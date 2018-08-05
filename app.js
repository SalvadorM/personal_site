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
app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.get('/project001', function(req, res){
  res.sendFile('/public/project001.html', { root : __dirname });
});

app.get('/design/porfolio_design', function(req, res){
  res.sendFile('/public/design/porfolio_design.html', { root : __dirname });
});
