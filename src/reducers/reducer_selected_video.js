import { GET_VIDEO_LIST , CHANGE_SELECTED_VIDEO } from '../actions/index';

export default function(state = null , action){
	switch(action.type){
		case GET_VIDEO_LIST:{
			if(!state){
				console.log(action.payload)
				return{ ...state , selectedVideo: action.payload.items[0] }
			}else {
				return state;
			}
		} 
		case CHANGE_SELECTED_VIDEO: {
			console.log(action.payload);
			return{	...state , selectedVideo: action.payload }
		}
	}

	return state;
}