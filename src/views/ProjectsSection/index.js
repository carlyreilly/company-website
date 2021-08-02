import React from 'react';

import battleVideo from '../../assets/videos/battleVideo.mp4';
import './index.css';
export default function ProjectsSection() {
  return (
    <div id='projects-section'>
      <video
        className='projects-background'
        src={battleVideo}
        type='video/mp4'
        width='1023'
        height='640'
        alt='yellow background with small squares of various colors peppered throughout'
        autoPlay
        loop
      />
    </div>
  );
}
