import React from 'react'

import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem />
  })
  return (
    <div>
      <div>{renderedList}</div>
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
