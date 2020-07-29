import React from 'react'

import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  // dont want to just invoke onVideoSelect, we want to call it with the video that was passed
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem

/*
From the VideoList.js, come over to the VideoItem.js, it's props object is now going to contain a video property

The props object here, contains a video property
destructure out just the video property  from props
    const VideoItem = (props) => {
    const VideoItem = ({ video }) => {

Have the video property, inside that the snippet, then title etc

*/
