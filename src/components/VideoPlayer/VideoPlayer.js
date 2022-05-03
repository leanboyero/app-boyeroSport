import React from 'react';

const VideoPlayer = ({src}) => {
  return (
    <div>
       <video width="100%" height={580} controls poster="/assents/images/home/PUMA.png">
        <source src={src} type="video/mp4"/>
      </video>
    </div>
  )
}

export default VideoPlayer;