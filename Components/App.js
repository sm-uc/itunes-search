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

   componentDidMount(){
     const cachedItems = JSON.parse(localStorage.getItem('favoriteList'));
     var listObj = {};

     if(cachedItems){
       cachedItems.forEach((item) => {
         var key = item.genre;
         if(listObj[key]){
           listObj[key].push(item);
         }
         else{
           listObj[key] = [item];
         }
       });
      this.setState({
        searchList:listObj
        
      });
     }
     else{
      this.setState({
        searchList:{},
        favoriteList:[]
      });
     }
     }
     
   

  handleFavorites(e,itemid,key){
    e.preventDefault();
    const getItems = JSON.parse(localStorage.getItem("favoriteList"));
    var favorite={};
  	 var newState = this.state.searchList[key].map((item) => {
      
  	 	if(item.id === itemid){
         item.isFavorite = !item.isFavorite;
         favorite = item;
  	 	}
  	 	return item;

     })
             
  	           if(favorite.isFavorite == true){
                this.setState({
                 
               ...this.state.searchList,
               [key] : newState,
           favoriteList:this.state.favoriteList.concat(favorite)
          
       })
       localStorage.setItem("favoriteList",JSON.stringify(getItems.concat(favorite)));
       
      }
      else{
        this.setState({
                 
          ...this.state.searchList,
          [key] : newState,
      favoriteList:this.state.favoriteList.filter((item) => item.id !== favorite.id)
        })

        localStorage.setItem("favoriteList",JSON.stringify(getItems.filter((item) => item.id !== favorite.id)));
      }
      
       
      
   }

  onSearch(query){
  	var listObj ={};
  	const baseUrl = 'https://itunes.apple.com/search';
    const querystring = "?term=" + query;
    const cachedItems = JSON.parse(localStorage.getItem('favoriteList'));
   axios.get(baseUrl+querystring)
  .then(resp => {
	   	
       var resObj = resp.data.results;
      

       resObj.forEach((item) => {
       	if(item.kind !== undefined){
       		
       const key = item.kind.toString().toUpperCase();
        var obj ={};
          obj.id = item.trackId;
          obj.name = item.trackName;
          obj.artwork = item.artworkUrl100;
          obj.genre = item.kind.toString().toUpperCase();
          obj.url = item.trackViewUrl;
          if(cachedItems){
          cachedItems.map((item) => {
          
          if(item.id === obj.id){
            obj.isFavorite = item.isFavorite
          }
        
        });
          }
          else{
            obj.isFavorite=false;
          }
          
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