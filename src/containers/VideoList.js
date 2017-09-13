/**
 * Created by phuongla on 9/12/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VideoListItem from '../components/VideoListItem';
import { selectVideo } from '../actions';


class VideoList extends Component {

    constructor(props) {
        super(props);

        this.handleVideoSelect = this.handleVideoSelect.bind(this);
    }

    handleVideoSelect(currentVideo) {
        const { selectVideo } = this.props;
        selectVideo(currentVideo);
    }

    render() {
        const { videos } = this.props;

        if(!videos) {
            return <div className="col-md-4 list-group">Data not found</div>;
        }

        const videoItems = videos.map((video) => {
            return (
                <VideoListItem
                    key={video.etag}
                    video={video}
                    onVideoSelect={this.handleVideoSelect}
                />
            );
        });

        return (
            <ul className="col-md-4 list-group">{videoItems}</ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoList);
