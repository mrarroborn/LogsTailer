const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');
var messageFile = "logs.txt";

//Declaring Routes
app.use('/api/log/', require('./routes/api/log'));
app.get('/log', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

 app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/client/style.css');
  });

  // establishing io connection
io.on('connection', client => { 
    console.log("User connected!");
    var data = fs.readFileSync(messageFile, 'utf8');
    var lines = data.split("\n");
    var logData="";
    for(i=lines.length-10;i<lines.length;i++){
        logData+=lines[i]+"<br>";
    }
    io.emit('broadcast',logData); 
 });

//  Check whether file is updated and update UI connent accordingly
  fs.open(messageFile, 'r', function(err, fd) {
    if(err) {
        console.log("Error file not found !!");
    }

    fs.watch(messageFile, function(event, filename) {
        if(event === "change") {
            console.log("File changed!");
            var data = fs.readFileSync(messageFile, 'utf8');
            var lines = data.split("\n");
            var logData="";
            var i="";
            for(i=lines.length-10;i<lines.length;i++){
                logData+=lines[i]+"<br>";
            }
            io.emit('broadcast',logData); 
             
        }
    });
});

server.listen(3000, () => {
  console.log('Server started on port *:3000');
});