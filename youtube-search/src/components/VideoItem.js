import React from 'react'

import './VideoItem.css'

// again, destructure out the prop we just passed down, onVideoSelect. Add on a callback, event handler to the div, so whenever someone clicks it, I want to call onVideoSelect with this particular video.
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        alt={video.snippet.title}
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem

// each video item will receive a separate video object.
// props in VideoItem it's props object, const VideoItem = (props) => , now contains a video property, that contains all the info about this particular video we want to show as a list.
// In the VideoList, props in VideoItem it's props object, const VideoItem = (props) => , now contains a video property, that contains all the info about this particular video we want to show as a list.
// going to make sure we can customise each of those components by taking the video we are mapping over and passsing it as a prop down into the VideoItem. So, in the VideoItem we are going to add a prop called video and pass it the video that we are currently iterating over.
// destructure, const VideoItem = (props) => {, becomes:
// const VideoItem = ({ video }) => {
