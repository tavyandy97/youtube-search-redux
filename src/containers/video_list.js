import React, { Component } from 'react';
import VideoListItem from '../components/video_list_item';
import { connect } from 'react-redux';
import { changeSelectedVideo } from '../actions/index';

class VideoList extends Component{
	render(){
		if(!this.props.videoList){
			return (
				<div className="video-list col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
					Loading...
				</div>
			);
		}else{
			return(
				<div className="video-list col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
					<ul className="list-group">
						{this.props.videoList.videoList.map( (video) =>{
							return(
								<VideoListItem
									onVideoItemSelect={this.props.changeSelectedVideo} 
									video={video}
									key={video.etag}
								/>
							);
						})}
					</ul>
				</div>
			)
		}
	}	
}

function mapStateToProps(state){
	return {
		videoList : state.videoList
	}
}

export default connect(mapStateToProps , { changeSelectedVideo } )(VideoList);