import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
})
// can use dummy reducer in boilerplate
// export default combineReducers({
//   replaceMe: () => 10
// })
