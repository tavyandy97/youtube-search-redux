// import { FETCH_VIDEO_LIST , UPDATE_VIDEO_LIST  } from '../actions/index';
import { GET_VIDEO_LIST  } from '../actions/index';

export default function(state = null , action){
	switch(action.type){
		case GET_VIDEO_LIST:{
			return{ ...state , videoList: action.payload.items }
		} 
	}

	return state;
}