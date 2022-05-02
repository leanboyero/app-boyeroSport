import React from 'react';

const VideoPlayer = () => {
  return (
    <div>
       <video width="100%" height={580} controls poster="/assents/images/home/PUMA.png">
        <source src="/assents/video/PUMA.mp4" type="video/mp4"/>
      </video>
    </div>
  )
}

export default VideoPlayer;