import React, { Component } from 'react';
import SearchBar from '../components/search_bar';
import Video from '../containers/video';
import VideoList from '../containers/video_list';

export default class App extends Component {
  render(){
    return (
	    <div>
	      <SearchBar/>
	      	<div className="row">
		      	<Video/>
		      	<VideoList/>
		    </div>
	    </div>
    );
  }
}
