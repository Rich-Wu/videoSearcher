import React from 'react';
import VideoItem from './VideoItem';

const VideoList = props => {
  const videoResults = props.results.map((result) => {
    return <VideoItem video={result} key={result.id.videoId} onVideoSelect={props.onVideoSelect}/>
  });
  return (
    <div className="ui relaxed divided list">{ videoResults }</div>
  );
}

export default VideoList;
