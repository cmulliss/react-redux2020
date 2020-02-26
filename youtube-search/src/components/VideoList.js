import React from 'react'

import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  // props.videos
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />
  })
  return <div>{renderedList}</div>
}

export default VideoList

// VideoList is going to take the array of video objects that we just fetched from the youtube api, and then for each video object we are going to render a single video item.
// return <div>{videos.length}</div>
// going to take the videos array, passed from the app component, and we are going to map over it.
// when we map over this array it's going to return a brand new array which is now going to contain a list of different VideoItem components.
// Asign that list of components to a variable renderedList, which is the result of mapping over the videos array.
// going to take each of these video objects, videos.map((video), and pass them as a prop down into each VideoItem that we create, and use that to customise the contents of the VideoItem component.
// props in VideoItem it's props object, const VideoItem = (props) => , now contains a video property, that contains all the info about this particular video we want to show as a list.
