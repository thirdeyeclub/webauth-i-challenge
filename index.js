require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const server = express();
const db = require('./database/config00.js');
//const model = require('./models/model-model.js');

const server = express();

server.use(helmet());
server.use(express.json());

//crud and hash


/*********************port and env************************* */
var ns = ['home Indie', 'home Ruby', 'home Chance','Mr. Anderson','home Employee #ER28-0652','friend', 'to the Server','to the happiest server this side of the sea, love','HOST #420'];
var n = ns[Math.floor(Math.random()*ns.length)];

const PORT = process.env.PORT || 5000;
server.listen(PORT, () =>
  console.log(`**Welcome ${n}.**\n** UP and running on http://localhost:${PORT} **\n`)
);