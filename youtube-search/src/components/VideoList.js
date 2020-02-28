import React from 'react'

import VideoItem from './VideoItem'
// destructuring out videos property, also onVideoSelect, that's a callback we just passed from the App down to the VideoList. Now take that callback and in turn pass it down into the VideoItem
const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    )
  })

  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList
// VideoList is going to take the array of video objects that we just fetched from the youtube api, and then for each video object we are going to render a single video item.
// return <div>{videos.length}</div>
// going to take the videos array, passed from the app component, and we are going to map over it.
// when we map over this array it's going to return a brand new array which is now going to contain a list of different VideoItem components.
// Asign that list of components to a variable renderedList, which is the result of mapping over the videos array.
// going to take each of these video objects, videos.map((video), and pass them as a prop down into each VideoItem that we create, and use that to customise the contents of the VideoItem component.
// props in VideoItem it's props object, const VideoItem = (props) => , now contains a video property, that contains all the info about this particular video we want to show as a list.
// going to make sure we can customise each of those components by taking the video we are mapping over and passsing it as a prop down into the VideoItem. So, in the VideoItem we are going to add a prop called video and pass it the video that we are currently iterating over.
