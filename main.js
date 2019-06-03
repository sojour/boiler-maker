const db = require('./server/db/database')
const app = require('./server')
const port = process.env.PORT || 3000

db.sync({ force: true })
  .then(() => {
    console.log('db synced')
    app.listen(port)
  })

