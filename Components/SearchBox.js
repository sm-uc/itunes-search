import React,{Component} from 'react';
import {FaSearch} from 'react-icons/fa';

class SearchBox extends Component{
  render(){
  	return(
        <div className="col-md-10 d-block mx-auto search">
    	<input type="text" id="searchinput"  className="col-md-12 form-control  p-6"/>
    	<button className="btn btn-primary mt-2" onClick={e => this.props.onSearch(document.getElementById('searchinput').value)}><FaSearch/> Search</button>
    </div>
  		);
  }

}
export default SearchBox;