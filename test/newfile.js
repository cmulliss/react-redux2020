// reformat Url to remove hyphens, https, domain, numbers and trailing front slash.
const reformatUrl = video.url
.replace(/-/g, ' ')
.replace(/^(?:https?:\/\/)?(?:www\.pexels.com\/video\/)?/i, '')
.replace(/[0-9]/g, '')
.replace(/^\w/, (c) => c.toUpperCase())
.slice(0, -1)

return (
<div>
  <div className='ui embed'>
    <iframe title='video player' src={videoSrc} />
  </div>
  <div className='ui segment'>
    <h4 className='ui header'>{video.user.name}</h4>
    <p>{reformatUrl}</p>
  </div>
</div>
)
}