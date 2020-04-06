import React from 'react'

const ApprovalCard = (props) => {
  console.log('props within ApprovalCard:', props)
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
// whenever we want to show some custom content, or a component, inside a component, then we take the child, wrap it with a parent component, then that child component is going to show up inside the child on the props.children property. Can then take that props.children property and reference it from anywhere inside our jsx.
