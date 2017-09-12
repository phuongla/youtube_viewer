import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyBCA4tj5NOZWQPYpA9pm_HXzHCE6edPq00';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            currentVideo: null
        };

        this.handleVideoSelect = this.handleVideoSelect.bind(this);
        this.searchYoutubeAPI('LOL');
    }

    searchYoutubeAPI(term) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({
                videos,
                currentVideo: videos[0]
            });
        });
    }

    handleVideoSelect(currentVideo) {
        this.setState({ currentVideo });
    }

  render() {
    const { videos, currentVideo } = this.state;
    const handleSearchTermChange = _.debounce((term) => this.searchYoutubeAPI(term), 300);
    return (
      <div>
          <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css" />
          <SearchBar onSearchTermChange={handleSearchTermChange}/>
          <VideoDetail video={currentVideo}/>
          <VideoList videos={videos} onVideoSelect={this.handleVideoSelect}/>
      </div>
    );
  }
}

export default App;
