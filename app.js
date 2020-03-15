/* eslint-disable no-cond-assign */
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const favicon = require('express-favicon');

const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoutes');
const globalErrorHandler = require('./controllers/errorController');
const app = express();

app.use(cors());

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.options('*', cors());

app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());
 
// if (process.env.NODE_ENV = 'development') {
  // app.use(morgan('dev'));
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'), function (err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  });
}

console.log(process.env.NODE_ENV)

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//BODY PARSER OR READING DATA FROM THE BODY INTO REQ.BODY
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

//DATA SANITIZATION against no sql query injection
app.use(mongoSanitize());

app.use(xss());

//serving static files
app.use(compression());
 
// 3) ROUTES
app.use('/api/v1/products', productRouter);
app.use('/api/v1/auth', authRouter);
 
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd' 
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  });
});

console.log(process.env.NODE_ENV)

module.exports = app;
