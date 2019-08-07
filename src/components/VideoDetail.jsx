import React from 'react';

const VideoDetail = props => {
  if (!props.video) return <div></div>;
  return (
    <div>
      <div className="ui embed">
        <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} frameborder="0" allowfullscreen="true"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;
