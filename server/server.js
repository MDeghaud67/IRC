const http = require('http');
const app = require('./app');
//const Chat = require('./models/Chat');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

//const io = require('socket.io');
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log("user "+socket.id+" connected");
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log("message: "+msg);
        socket.broadcast.emit("received", { message: msg  });
        
        app.then(db  =>  {
            console.log("connected correctly to the server");
        
            const chat = new Chat({
                ...req.body
            });
            chat.save();
        });
    });
})

server.listen(process.env.PORT || 3000, () => {
    console.log('server is running on port', server.address().port);
  });