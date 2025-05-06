require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const allowedOrigins = require('./corsOptions');

const indexRouter = require('./routes/indexRouter');
const compression = require('compression');

const app = express();

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  maxAge: 300,
  optionsSuccessStatus: 204,
};

app.disable('x-powered-by');

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: [
          "'self'",
          /.*\.photo-tagging-app\.pages\.dev.*/,
          'http://localhost:3000',
          /.*\.railway.app.*/,
          'http://localhost:5173',
        ],
      },
    },
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    crossOriginOpenerPolicy: { policy: 'same-origin' },
  }),
);
app.use(compression());
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  expressSession({
    cookie: {
      maxAge: 1 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
    },
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000,
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  }),
);

app.use('/', indexRouter);

// Catch 404 errors and forward to the error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error Handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : err.status;
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
