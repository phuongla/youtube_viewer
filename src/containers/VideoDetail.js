/**
 * Created by phuongla on 9/12/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {

    render() {
        const { video } = this.props;

        if(!video) {
            return <div>Loading....</div>;
        }

        const { title, description } = video.snippet;
        const { videoId } = video.id;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} title={title}/>
                </div>
                <div className="details">
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { currentVideo } = state;
    return {
        currentVideo
    };
}

export default connect(mapStateToProps)(VideoDetail);
