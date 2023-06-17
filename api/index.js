const { server } = require('./src/app.js');
const { conn } = require('./src/db.js');
const http = require('http');

conn.sync({ force:false}).then (()=>{

  server.listen(3001, ()=>{
      console.log('% listening at 3001')
  })
})
