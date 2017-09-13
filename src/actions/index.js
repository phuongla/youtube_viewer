/**
 * Created by phuongla on 9/13/2017.
 */

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBCA4tj5NOZWQPYpA9pm_HXzHCE6edPq00';

export const VIDEO_SELECT = 'VIDEO_SELECT';
export const VIDEO_SEARCH = 'VIDEO_SEARCH';


function searchYoutubeAPI(term) {
    return new Promise((resolve, reject) => {
        YTSearch({ key: API_KEY, term }, (videos) => {
            resolve(videos);
        });
    });
}

function selectVideo(currentVideo) {
    return {
        type: VIDEO_SELECT,
        payload: currentVideo
    }
}

function searchVideo(term) {
    const payload = searchYoutubeAPI(term);
    return {
        type: VIDEO_SEARCH,
        payload
    }
}

export {
    selectVideo,
    searchVideo
}