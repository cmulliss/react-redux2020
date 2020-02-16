import React from 'react'

const ApprovalCard = (props) => {
  return (
    <div className='ui card'>
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui basic red button'>Decline</div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard

// remember, every fn we put together receives a first arg that we refer to as props.
// CommentDetail is now being passed down as a prop to ApprovalCard, it's going to show up inside the ApprovalCard on the props object.
