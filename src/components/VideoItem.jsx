import React, {Component} from 'react';

class VideoItem extends Component {
  render() { 
    return (
      <div>
        <img src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title}/>
        {this.props.video.snippet.title}
      </div>
    );
  }
}
 
export default VideoItem;