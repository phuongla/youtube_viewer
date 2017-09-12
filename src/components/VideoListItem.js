/**
 * Created by phuongla on 9/12/2017.
 */
import React, { Component } from 'react';

class VideoListItem extends Component {

    render() {
        const { video, onVideoSelect } = this.props;
        const imageUrl = video.snippet.thumbnails.default.url;
        const { title } = video.snippet;

        return (
            <li className="list-group-item" onClick={() => onVideoSelect(video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} alt={title}/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading">
                        {title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;

