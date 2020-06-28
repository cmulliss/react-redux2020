import React from 'react'

function getCurrentTime () {
  return new Date().toLocaleTimeString()
}

const CommentDetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.src} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metadata'>
          <span className='date'>{getCurrentTime()}</span>
        </div>
        <div className='text'>{props.text}</div>
      </div>
    </div>
  )
}

export default CommentDetail
