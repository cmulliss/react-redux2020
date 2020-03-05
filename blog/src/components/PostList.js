import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions'

class PostList extends Component {
  componentDidMount() {
    console.log('this.props', this.props)
    this.props.fetchPosts()
  }

  render() {
    return <div>PostList</div>
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostList)
// needs to get a list of posts from the Json api
// so going to define a componentDidMount lifecycle method on the class, going to place an action creator inside.
// so any time our PostList component shows on screen our action creator is going to be automatically called.
// Our action creator is going to use axios to make an api request over to the json api.
// in connect, null, as no state to pass in, then our action creator

/* fetchPosts is an action that we have passed into the connect function as a mapDispatchToProps argument in object form. Because we have done this, the action is now wrapped in the dispatch function and available to us to use as props.

https://react-redux.js.org/using-react-redux/connect-mapdispatch#providing-a-mapdispatchtoprops-parameter

You can confirm this by console logging this.props in that component, you will see fetchPosts listed, along side anything that is currently tracked in your Redux store or component level state.
*/
