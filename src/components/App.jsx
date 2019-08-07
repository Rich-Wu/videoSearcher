import React, { Component } from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/youtube';
import VideoList from './VideoList';

class App extends Component {
  state = { results: [] };

  videoSearch = async term => {
    const results = await YouTube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({results: results.data.items});
    console.log(this.state.results);
  }

  render() { 
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={ this.videoSearch } />
        <VideoList results={ this.state.results } />
      </div>
    );
  }
}
 
export default App;