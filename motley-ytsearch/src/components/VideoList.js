import React from 'react'

import VideoItem from './VideoItem'

// destructuring out videos and onVideoSelect
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.etag} />
    )
  })
  // props.videos
  console.log('videos', videos)
  return (
    <div>
      <div className='ui relaxed divided list'>{renderedList}</div>
    </div>
  )
}

export default VideoList

/*
props from state, added to App, now any time this component is rendered onto the screen, it will have a prop calles props.videos

can destructure, using 2015 syntax
const VideoList = (props) => {
taking just the videos property out of the props
const VideoList = ({videos}) => {

import VideoItem, and map over ({videos}) array, then render one single videoItem component for every video inside there.

take each of the video objects, videos.map((video), and pass them down as a prop into each VideoItem that we create. Then use that to customise the contents.

So, now in VideoItem (above) add in a prop calles video and pass it the video that we are currently iterating over.
return <VideoItem video={video} />

Then go over to the VideoItem.js, it's props object is now going to contain a video property
*/
