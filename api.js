import React from 'react';
import axios from 'axios';
import config from './config';

//const querystring = require('querystring');

export const fetchList =(querytext) => {
	return axios.get(`${config.serverUrl}/search?term=querytext`).
	then(resp => {
		const listObj ={};
       var resObj = resp.data;
       for(var key in resObj.keys){
       	
         resObj[key].forEach((item) => {
         	var obj ={id:0,name:'',artwork:'',genre:'',url:'',favorite:false};
          obj.id = item.trackId;
          obj.name = item.trackName;
          obj.artwork = item.artworkUrl100;
          obj.genre = item.kind;
          obj.url = item.trackViewUrl;
           if(listObj[key] != null){
              listObj[key].push(obj);

           }
           else{
           	listObj[key] = [obj];
           }
         });
       	}
       	return listObj;
       });
	};
