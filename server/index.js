require('./environment');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const cors = require('cors');
const app = require('./src/app');

const server = express();

server.use(cors({
    credentials: true,
    origin: true
}));

server.use(bodyParser.json());
server.use(morgan('dev'));

server.use(process.env.ROUTE_PREFIX, app);

server.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Starting proxy at ${process.env.HOST}:${process.env.PORT}${process.env.ROUTE_PREFIX}`);
})