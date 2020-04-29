import React from 'react'

import VideoItem from './VideoItem'

// destructuring props.videos
// ref the props object from the App, the callback we just passed down from the App. Pass it down in turn into the VideoItem. Destructure out videos ands onVideoSelect.
const VideoList = ({ videos, onVideoSelect }) => {
  // inner fn will be called one time for every object inside the videos array. Take videos []  and map over it, for every video we will render one VideoItem.
  // add video prop
  const renderedList = videos.map((video) => {
    return (
      <VideoItem video={video} key={video.id} onVideoSelect={onVideoSelect} />
    )
  })

  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList
// render our list of VideoItem components, make sure we can customise each of those components by taking the video that we are mapping over and passing it as a prop down into the VideoItem.

// pre destructuring:
// const VideoList = (props) => {
//     return (
//       <div>
//         <div>{props.videos.length}</div>
//       </div>
//     )
//   }
//
// props.videos
// console.log('props', props)

// <div>I have {videos.length} videos in the props</div>
