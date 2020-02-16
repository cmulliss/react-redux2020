import React from 'react'
import faker from 'faker'

import './App.css'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

function App() {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          authorName='Sam'
          text='Hello there!'
          commentTime={Date()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName='Pat'
          text='A comment'
          commentTime={Date()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          authorName='Guy'
          text='More text'
          commentTime={Date()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

export default App

// CommentDetail is now being passed down as a prop to ApprovalCard, it's going to show up inside the ApprovalCard on the props object.
//
