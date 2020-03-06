import jsonPlaceholder from '../apis/jsonPlaceholder.'

// defining a fn that is going to return a fn
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response })
}

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
