import './VideoItem.css';
import React, {Component} from 'react';

class VideoItem extends Component {
  render() { 
    return (
      <div className="item video-item">
        <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.title}/>
        <div className="content">
          <div href="#" className="header">
            {this.props.video.snippet.title}
          </div>
          {/* <div className="description">
            {this.props.video.snippet.description}
          </div> */}
        </div>
      </div>
    );
  }
}
 
export default VideoItem;