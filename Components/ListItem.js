import React ,{Component} from 'react';
import {FaHeart} from 'react-icons/fa';

class ListItem extends Component {
	
         render(){

         return(
         	<div className="list mt-2 row">
		{this.props.itemlist.map((item) => (
             
			
        
        	
        		<div className="card item col-sm-6 col-md-3 px-0 mt-3" key = {item.id}>
        			<img src={item.artwork} class="card-img-top" alt="artwork"/>
        			<div className="card-body">
        			<div className="card-title">{item.name}</div>
                     <div className="card-text">{item.genre}</div>
                     <a href={item.url}>View Link </a>
                     <a href="#" className="float-right"  onClick={e => this.props.toggleFavorite(item.id,item.genre)}><FaHeart color={item.isFavorite?'red':'black'}/></a>
                     </div>  
        		</div>

        		

        		
        	
       
        
    ))}
     </div>
		);
    }
		
}
export default ListItem;