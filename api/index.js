// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');

// conn.sync({ alter:true}).then (()=>{

//     server.listen(3001, ()=>{
//         console.log('% listening at 3001')
//     })
// })
const { server } = require('./src/app.js');
const { conn } = require('./src/db.js');
const http = require('http');

conn.sync({ alter:true }).then(() => {
  const httpServer = http.createServer(server);
  const io = require('socket.io')(httpServer);

  io.on('connection', (socket) => {
    console.log('A user connected.');

    socket.on('disconnect', () => {
      console.log('A user disconnected.');
    });
  });

  httpServer.listen(3001, () => {
    console.log('% listening at 3001');
  });
});
