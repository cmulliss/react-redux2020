import './App.css'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam' timeAgo='Today at 4:45PM' commentText='Nice Blog' image='https://source.unsplash.com/random'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Alex' timeAgo='Today at 6:00PM' commentText='I like the style' image='https://source.unsplash.com/random' />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author='Jane' timeAgo='Today at 9:000PM' commentText='Like the writing' image='https://source.unsplash.com/random' />
      </ApprovalCard>
    </div>
  )
}

export default App

/*
CommentDetail is a child of ApprovalCard
whenever we want to make a truly reuseable component, we will take the child, wrap it with a parent component, and then that child component is going to show up inside the child on the props.children property.
*/
