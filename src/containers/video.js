import React, { Component } from 'react';
import { connect } from 'react-redux';

class Video extends Component{
	render(){
				if(!this.props.selectedVideo)
					return (
						<div className="video-detail col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
							Loading...
						</div>
					);
				else{
					const video = this.props.selectedVideo.selectedVideo;
					const VIDEO_URL = `https://www.youtube.com/embed/${video.id.videoId}`;
					return(
						<div className="video-detail col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe className="embed-responsive-item" src={VIDEO_URL}></iframe>
							</div>
							<div className="video-title">
								{video.snippet.title}
								<div className="video-channel">{video.snippet.channelTitle}</div>
							</div>

							<div className="video-description">{video.snippet.description}</div>
						</div>
					);
				}
	}
}

function mapStateToProps(state){
	return{
		selectedVideo : state.selectedVideo
	}
}

export default connect(mapStateToProps)(Video);