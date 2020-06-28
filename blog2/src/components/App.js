import React from 'react'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import './App.css'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          src={faker.image.avatar()}
          author='Joe'
          text='nice blog post'
          date='Today at 6pm'
        />
      </ApprovalCard>
    </div>
  )
}

export default App

// as ApprovalCard is receiving CommentDetail as child props, need to (props) in ApprovalCard.
