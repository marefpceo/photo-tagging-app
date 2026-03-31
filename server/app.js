// require('dotenv').config();
import 'dotenv/config';

import createError from 'http-errors';
import express from 'express';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import allowedOrigins from './corsOptions.js';

import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from './generated/prisma/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

import indexRouter from './routes/indexRouter.js';
import compression from 'compression';

const app = express();

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
  maxAge: 300,
  optionsSuccessStatus: 204,
};

app.disable('x-powered-by');
app.set('trust proxy', 1);

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
app.use(express.static('public'));

app.use(
  expressSession({
    cookie: {
      maxAge: 1 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    },
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new PrismaSessionStore(prisma, {
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

export default app;
