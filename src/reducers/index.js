/**
 * Created by phuongla on 9/13/2017.
 */
import { combineReducers } from 'redux';
import VideoReducer from './VideoReducers';

const rootReducer = combineReducers({
    videoReducer: VideoReducer
});

export default rootReducer;