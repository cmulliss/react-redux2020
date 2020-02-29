import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const VideoSrc = `https:/www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className='ui embed'>
        <iframe title='Video Player' src={VideoSrc} />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}
export default VideoDetail

// to show some video player, the video title  and description
// ({video}) instead of (props), destructure out video, so don't need to say props.video
// className embed is special in semantic-ui.
// youtube videos get called with their ids, videoIds
// es2015 template strings

