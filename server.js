'use strict';

const express = require('express');
const FBeamer = require('./FBeamer');
const conf = require('./config');

const fb = conf.FB;

const server = express();
const PORT = process.env.PORT || 3000;

/*
server.get('/', (req, res) => res.send("hello !"));
server.listen(PORT, () => console.log('The bot server is running on port ' + PORT));
*/

let u = new FBeamer(fb);
server.get('/', (req,res) => {u.registerHook(req,res);res.send("hello !");});
server.listen(PORT,() => console.log('Ok'));
