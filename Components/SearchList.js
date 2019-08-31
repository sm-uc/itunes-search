import React,{Component} from 'react';
import ListItem from './ListItem';

class SearchList extends Component{
	render(){
	return(
         <div className="col-md-10 d-block mx-auto px-auto result">
     	{ Object.keys(this.props.searchList).map((k) => (

     	        <div className="row" key={k}>
     			<h3 className="heading pl-8">{k}</h3>
     		 <ListItem toggleFavorite={this.props.markFav} itemlist={this.props.searchList[k]}/>
             </div>
         ))
     }
     	</div>
     	);
    }
        
         
	
}

export default SearchList;
