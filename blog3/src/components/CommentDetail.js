// import PropTypes from 'prop-types'

const Commentdetail = (props) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='avatar' src={props.image} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.author}
        </a>
        <div className='metdata'>
          <span className='date'>{props.timeAgo}</span>
        </div>
        <div className='text'>{props.commentText}</div>
      </div>
    </div>
  )
}

// CommentDetail.propTypes = {
//   author: PropTypes.string
// }

export default Commentdetail
