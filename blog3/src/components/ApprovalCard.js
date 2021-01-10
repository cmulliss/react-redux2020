import React from 'react'

const ApprovalCard = (props) => {
  console.log('props.children:', props.children)

  return (
    <div className='ui card'>
      <div className='content'>{props.children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui basic red button'>Reject</div>
        </div>
      </div>
    </div>

  )
}

export default ApprovalCard

/*
ApprovalCard has CommentDetail as a child, so props.children shows commentDetail contents.

We always need to into target component, and somewhere reference props.children.
*/
