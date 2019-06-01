
const db = require('./server/db/database')
const app = require('./server')
const port = process.env.PORT || 3000

db.sync()
  .then(() => {
    console.log('db synced')
    app.listen(port)
  })

