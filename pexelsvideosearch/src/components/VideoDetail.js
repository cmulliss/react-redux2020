import React from 'react'

// destructuring out, so instead of props.video, just video
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  // iframe, semantic-ui's ui embed used too.
  const videoSrc = `https://player.vimeo.com/video/${video.id}`

  return (
    <div>
      <div className='ui embed'>
        <iframe title='video' src={videoSrc} />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.user.name}</h4>
        <p>
          {video.url
            .replace(/-/g, ' ')
            .replace(/^(?:https?:\/\/)?(?:www\.pexels.com\/video\/)?/i, '')
            .replace(/[0-9]/g, '')
            .replace(/^\w/, (c) => c.toUpperCase())
            .slice(0, -1)}
        </p>
      </div>
    </div>
  )
}

export default VideoDetail

// Adding VideoDetail to App
// on VideoDetail, note: video singular, get error cannot read property 'user' of null, as have selectedVideo: null, in the state. Add a simple check inside VideoDetail.

/*
 {
            video.url
              .replace(/-/g, ' ')
              .replace(/^(?:https?:\/\/)?(?:www\.)?/i, '')
            {video.url
            .replace(/-/g, ' ')
            .replace(/^(?:https?:\/\/)?(?:www\.pexels.com\/video\/)?/i, '')
            .replace(/[0-9]/g, '')
            .replace(/^\w/, (c) => c.toUpperCase())
            .slice(0, -1)}  .split('.')[0]
          }

            src='https://player.vimeo.com/video/352010672?title=0&amp;portrait=0&amp;byline=0&amp;autoplay=1

            https://www.pexels.com/video/

*/
