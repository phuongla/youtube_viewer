import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../components/App.css';
import SearchBar from '../containers/SearchBar';
import VideoList from '../containers/VideoList';
import VideoDetail from '../containers/VideoDetail';

class App extends Component {

  render() {
    const { videos, currentVideo } = this.props;
    return (
      <div>
          <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css" />
          <SearchBar/>
          <VideoDetail video={currentVideo}/>
          <VideoList videos={videos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { videoReducer } = state;
    const { videos, currentVideo } = videoReducer;

    return {
        videos,
        currentVideo
    };
}

export default connect(mapStateToProps)(App);
