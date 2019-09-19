const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// const userRouter = require('./route/users');
// server.use('/api/users', userRouter)

module.exports = server;