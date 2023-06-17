const server = require ('./src/app.js')
const {conn} = require ('./src/db.js')

conn.sync({ force:false}).then (()=>{
<<<<<<< Updated upstream
    server.listen(3001, ()=>{
        console.log('% listening at 3001')
    })
})
=======

  server.listen(3001, ()=>{
      console.log('% listening at 3001')
  })
})
>>>>>>> Stashed changes
