const expressSession = require('express-session')({
    secret: process.env.APP_SECRET,
    resave: true,
    saveUninitialized: false,
  })

export default expressSession