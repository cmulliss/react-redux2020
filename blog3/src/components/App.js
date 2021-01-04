import './App.css'
import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail author='Sam' />
      <CommentDetail author='Alex' />
      <CommentDetail author='Jane' />
    </div>
  )
}

export default App

/*
Props
*/
