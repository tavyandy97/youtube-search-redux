import React, { Component } from 'react';

const VideoListItem = ( props ) =>{
	return(
		<li 
			onClick={ () => props.onVideoItemSelect(props.video) }
			className="list-group-item video-list-item">
					<img src={props.video.snippet.thumbnails.default.url} className="video-list-item-image"/>
					<div className="video-list-item-title">
						{props.video.snippet.title}
					</div>
					<div className="video-list-item-channel">
						{props.video.snippet.channelTitle}
					</div>
		</li>
	)
}

export default VideoListItem;