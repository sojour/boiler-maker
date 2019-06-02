const express = require('express')
const path = require('path')
const morgan = require('morgan')
const session = require('express-session');
const passport = require('passport');
const User = require('./db/models/User')

const app = express();
//passport registration
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => done(null, user))
    .catch(done);
});



app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'configure this',
  resave: false,
  // this option says if I am new but not modified still save
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', require('./auth'))
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
