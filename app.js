require("dotenv").config();
const express = require("express");
const app = express();
const http = require('http').createServer(app);
// const path = require('path');

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



const io = require('socket.io')(http,{
	cors: { 
	    origin: [process.env.URL_SOCKET], 
	    methodes: [ "GET" , "POST" ] 
	} 
});
//
var router = express.Router();
const cors = require('cors');
app.use(express.json());
app.use(cors({
	origin: '*' 
}));

 
const userRouter = require("./api/users/user.router");
const accidentRouter = require("./api/accident/accident.router");
const agentRouter = require("./api/agent/agent.router");
const pompierRouter = require("./api/pompier/pompier.router");
const santeRouter = require("./api/sante/sante.router");
 

app.use("/api/accidents", accidentRouter); 
app.use("/api/agents", agentRouter);
app.use("/api/pompier", pompierRouter);
app.use("/api/sante", santeRouter);
app.use("/api/users", userRouter);
app.use('/', router);

const port = process.env.PORT || 6000;
http.listen(port, () => {
    console.log("server up and running on PORT :", port);
}); 


io.on('connection', function(socket) {
    	console.log("new user id connected " + socket.id);
    	socket.on('sendData', function (data) {
    		// body...
    		console.log(data)
    		socket.broadcast.emit('sendData', data);
    	});
});