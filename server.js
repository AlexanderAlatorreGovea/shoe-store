const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});
 
dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
//mongodb://alexander_alatore:Freshman123.@ds359868.mlab.com:59868/heroku_w3q5crd8
// // mongoose
// //   .connect(DB, {
// //     useNewUrlParser: true,
// //     useCreateIndex: true, 
// //     useUnifiedTopology: true,
// //     useFindAndModify: false
// //   })
// //   .then(() => console.log('DB connection successful!'));

mongoose
  .connect(process.env.MONGO_URI || "mongodb://alexander_alatore:Freshman123.@ds359868.mlab.com:59868/heroku_w3q5crd8", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});