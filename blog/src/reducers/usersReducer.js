export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload]
    default:
      return state
  }
}

// if we see an action with the type 'FETCH_USER', we are going to make sure we add the payload property on that action to our state [].
