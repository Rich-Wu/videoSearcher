import React, { Component } from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    results: [],
    selectedVideo: null
   };

  videoSelect = (video) => {
    console.log("Selected: ", video);
    this.setState({selectedVideo: video});
  }

  videoSearch = async term => {
    const results = await YouTube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      results: results.data.items,
      selectedVideo: results.data.items[0]
    });
  }

  componentDidMount() {
    this.videoSearch('NYC Food');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={ this.videoSearch } />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={ this.state.selectedVideo } />
            </div>
            <div className="five wide column">
              <VideoList results={ this.state.results } onVideoSelect={ this.videoSelect }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
