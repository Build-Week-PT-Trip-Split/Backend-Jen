const express = require('express');
const cors = require('cors');


const configureMiddleware = require('./middleware');
const usersRouter = require('../users/usersRouter');
const tripsRouter = require('../trips/tripsRouter');
const authRouter = require('../auth/auth-router');
const expensesRouter = require('../expenses/expensesRouter');
const paymentsRouter = require('../payments/paymentsRouter');

const server = express();

configureMiddleware(server);

server.use('/users', usersRouter);
server.use('/auth', authRouter);
server.use('/trips', tripsRouter);
server.use('/expenses', expensesRouter);
server.use('/payments', paymentsRouter);

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('TripSplitr')
});

module.exports = server;