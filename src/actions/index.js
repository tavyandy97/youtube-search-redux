import { YouTube, SearchRequest } from 'youtube-search-google-api';
const youtube = new YouTube()
const API_KEY = '';

export const GET_VIDEO_LIST = 'GET_VIDEO_LIST';
export const CHANGE_SELECTED_VIDEO = 'CHANGE_SELECTED_VIDEO';

export function fetchVideoList(term ){
	return  new Promise((resolve , reject)=>{
		var pay ;
		youtube.search(new SearchRequest({
		    query: {
				part: 'snippet',
				key: API_KEY,
				maxResults: 6,
				order: 'viewCount',
				type: 'video',
				publishedAfter: '2015-10-01T00:00:00Z',
				q: encodeURIComponent(term).replace(/%20/g , '+')
		    }
		  }, function(error, response, body) {
		  	resolve(JSON.parse(body));
		  })
		);
	}).then((fromResolve)=>{
		return{
			type : GET_VIDEO_LIST,
			payload : fromResolve
		}
	});
}

export function changeSelectedVideo(video){
	return{
		type: CHANGE_SELECTED_VIDEO , 
		payload: video
	}
} 