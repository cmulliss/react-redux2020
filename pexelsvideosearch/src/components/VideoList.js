import React from 'react'

import VideoItem from './VideoItem'

// destructuring props.videos
const VideoList = ({ videos }) => {
  // inner fn will be called one time for every object inside the videos array.
  videos.map((video) => {
    return <VideoItem />
  })
  return (
    <div>
      <div>I have {videos.length} videos in the props</div>
      <VideoItem />
    </div>
  )
}

export default VideoList

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
