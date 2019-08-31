import React ,{Component} from 'react';
import SearchList from './SearchList';
import SearchBox from './SearchBox';
import * as api from '../api';
import axios from 'axios';

class App extends Component{
	constructor(){
		super();
  this.state={
  	searchList:{},
  	favoriteList:[]
  };
    this.onSearch = this.onSearch.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);

   }

  handleFavorites(itemid,key){
  	 var newState = this.state.searchList[key].map((item) => {

  	 	if(item.id === itemid){
  	 		item.isFavorite = !item.isFavorite;
  	 	}
  	 	return item;

  	 })
  	 console.log(newState);
                this.setState({
                 
               ...this.state.searchList,
               [key] : newState
           //favoriteList:this.state.favoriteList.concat(favorite)
          
       })
   }

  onSearch(query){
  	var listObj ={};
  	const baseUrl = 'https://itunes.apple.com/search';
  	const querystring = "?term=" + query;
   axios.get(baseUrl+querystring)
  .then(resp => {
	   	
       var resObj = resp.data.results;
      

       resObj.forEach((item) => {
       	if(item.kind !== undefined){
       		console.log(item.kind);
       const key = item.kind.toString().toUpperCase();
        var obj ={};
          obj.id = item.trackId;
          obj.name = item.trackName;
          obj.artwork = item.artworkUrl100;
          obj.genre = item.kind.toString().toUpperCase();
          obj.url = item.trackViewUrl;
          obj.isFavorite=false;
           if(listObj[key] != null){
              listObj[key].push(obj);

           }
           else{
           	listObj[key] = [obj];
           }
       }
       })
       // debugger();
          return listObj;

       })
  .then(result => {
  	
         this.setState({
         	searchList:result
         });
      } )



      // api.fetchList(query)
      // .then(result => {
      //    this.setState({
      //    	searchList:result
      //    })
      // } ); 
    
    }

render(){
	return(
		<div class="col">
		 <SearchBox onSearch={this.onSearch}/>
        <SearchList markFav = {this.handleFavorites}  searchList={this.state.searchList}/>
       
       </div>
		);
}


}

export default App;