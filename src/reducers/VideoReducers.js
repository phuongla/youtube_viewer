/**
 * Created by phuongla on 9/13/2017.
 */

import { VIDEO_SEARCH, VIDEO_SELECT } from '../actions';

export default function (state = {}, action) {
    const { type, payload } = action;
    console.log('Reducers: ', action);

    switch(type) {
        case VIDEO_SEARCH:
            return {
                ...state,
                videos: payload,
                currentVideo: payload.length > 0 ? payload[0] : null
            };
        case VIDEO_SELECT:
            return {
                ...state,
                currentVideo: payload
            };
        default:
            return state;
    }
}