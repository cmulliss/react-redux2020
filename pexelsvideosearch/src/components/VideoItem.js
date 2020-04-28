import React from 'react'

import './VideoItem.css'

// this props object is going to contain a video property which contains all the info about this particular video that we want to show as a list. Again destrucure out props video and onVideoSelect.
const VideoItem = ({ video, onVideoSelect }) => {
  // add event handler to div, We don't want to just invoke onVideoSelect, we want to call onVideoSelect with this very particular video item component. Whenever someone clicks on this, I want to call onVideoSelect with this particular video: const VideoItem = ({ video
  // => fn so can call with the video.
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img className='ui image' src={video.image} alt={video.user.name} />
      <div className='content'>
        <div className='header'>Photographer: {video.user.name}</div>
        <div className='description'>Id: {video.id}</div>
      </div>
    </div>
  )
}

export default VideoItem

// render our list of VideoItem components, make sure we can customise each of those components by taking the video that we are mapping over and passing it as a prop down into the VideoItem.

// now, here, render our list of VideoItem components, make sure we can customise each of those components

// we want to get a click event on our VideoItem, to make a change on the app state. We are going to pass a fn callback down to the VideoList, then down to the VideoItem.

// <p>URL: {video.url}</p>
// <p>Image: {video.image}</p>
