const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./apiRoutes'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


module.exports = app
