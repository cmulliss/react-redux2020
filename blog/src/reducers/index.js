import { combineReducers } from 'redux'
import postsReducer from './postsReducer'

export default combineReducers({
  posts: postsReducer
})
// can use dummy reducer in boilerplate
// export default combineReducers({
//   replaceMe: () => 10
// })
