//var config = require('./config');
//import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

server.set('view engine','ejs');
// 

server.get('/',(req,res) => {
  console.log('hi')	
  res.render('index');
});
server.use(express.static('public'));
//server.use('/',apiRouter);

server.listen(8080, () => {
  console.info('Express listening on port', 8080);
});



  