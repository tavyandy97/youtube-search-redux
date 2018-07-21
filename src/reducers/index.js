import { combineReducers } from 'redux';
import VideoListReducer from './reducer_video_list';
import SelectedVideoReducer from './reducer_selected_video';

const rootReducer = combineReducers({
  videoList : VideoListReducer , 
  selectedVideo : SelectedVideoReducer
});

export default rootReducer;
