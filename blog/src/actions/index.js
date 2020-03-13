import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder.'

// second arg redux thunk calls our inner fns with, for all these action creators, is getState, gives us access to all the data inside redux.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
}

// only going to call fetchPostsAndUsers, only action creator we are going to call, not fetchPosts and fetchUsers.

// using preconfigured axios instance to make a request inside our action creator. Using async, await then list out actual request. Then assign result to response. Finally, take response object and assign it to the payload property.

// we have an action creator, it makes a request, and it's going to return an action object with our data on the payload property. Wont work, need redux-thunk.
// 2 problems
// problem 1
// Uncaught Error: Actions must be plain objects. Use custom middleware for async actions
// Action creators must return plain js objects with a type property, and optionally a payload as well, we are not! At present we are not returning an action from our action creator. Even though it really looks like it is returning an object with a type property, after transpiling to es2015 code, we are not. This is becuase we are using the async await syntax (test in Babel.io) See video 164. Not returning our action object, but our request object.

// problem 2
// By the time our action gets to a reducer, we wont have fetched our data.

// returning an object as action, when making use of redux-thunk, not going to return any actions from the inner fn any more.

// The entire problem with async await is that with a synchronous action creator it causes us to return a request object, instead of an action. Once we have redux thunk, the async await syntax is only going to modify the return values of the inner fn.
// It is only what we return from the outer fn, the action creator itsef, that we care about.

// can refactor this:
// const userIds = _.uniq(_.map(getState().posts, 'userId'))
//   userIds.forEach((id) => dispatch(fetchUser(id)))
//   console.log('userIds', userIds)
