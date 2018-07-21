import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideoList ,  updateVideoList } from '../actions/index'

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term: ''};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.props.fetchVideoList(this.state.term);
	}

	onInputChange(event){
		this.setState({ term : event.target.value });
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchVideoList(this.state.term);
	}

	render(){
		return(
			<div className="search-bar col-lg-10 col-md-10 col-sm-12 col-xs-12">
				<form className="input-group" onSubmit={this.onFormSubmit}>
					<label className="logo"><i className="fa fa-youtube"></i></label>
					<input 
						type="text"
						className="form-control search-bar-input"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
	    			<button type="submit" className="btn btn-danger input-group-addon search-bar-btn" >
	    				<i className="fa fa-search"></i>
	    			</button>
	    		</form>
			</div>
		);
	}
}


export default connect( null , { fetchVideoList , updateVideoList } )(SearchBar);