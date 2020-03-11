export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    default:
      return state
  }
}

// when our app loads in the browser, all of the reducers run an initial time, with an action of some initialisation type and return our default state, as does not match 'FETCH_POSTS', returns an empty []. So posts property contains an empty [] initially. After all our reducers run, our app is going to rendered one time on the screen, so the PostList component is going to be displayed once.
// immediately after, our componentDidMount lifecycle method will be called and then we go through entire process of running off to api and fetching some data.
// After we get back some data, and dispatch an action to our reducer, the reducer sees that the action has a type of 'FETCH_POSTS' and returns whatever value is inside that action at payload property.
// Our PostList component is going to be rendered a second time, mapStateToProps is going to be called a second time, now going to get the new value of staate.posts and then that new props property, or post.posts is going to show up inside our component. The render method gets called again and and we the console.log a second time.
// on our payload propery we have the entire response, but only want data.
