import express from 'express';
import config from '../config';
import axios from 'axios';
import https from 'https';

const url = require('url');
const router = express.Router();
const baseUrl = 'https://itunes.apple.com/search';

router.get('/search',(req,res) => {
	
	var querystring ='?';
	for(const key in req.query){
       querystring += `${key}=${req.query[key]}`;
	}
    
    
       fetch(baseUrl+querystring)
       .then(response => response.json())
       .then()
  // results = fire apple server with this query
  // return the response
//    function(req,res,next){
//    	const response = {};
//   axios.get(baseUrl+querystring)
//   .then(resp => resp.data)
//   .then(result =>  {
//   	//console.log(result.results);
//   	const arr = result.results;
  	
//      arr.forEach((item) => {
//      	//console.log(element);
//      	const key = item.kind
//      	if(response[key] != null){
//      		response[key].push(item);
//      	}
//      	else{
//      		response[key] = [item];
//      	}
//      });
     
//       res.send(response);
//   })
   
// }
 
);




export default router;


