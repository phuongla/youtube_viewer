/**
 * Created by phuongla on 9/12/2017.
 */
import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component {

    render() {
        const { videos, onVideoSelect } = this.props;

        const videoItems = videos.map((video) => {
            return (
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelect={onVideoSelect}
                />
            );
        });

        return (
            <ul className="col-md-4 list-group">{videoItems}</ul>
        );
    }
}

export default VideoList;
