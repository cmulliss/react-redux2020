import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions'
import UserHeader from './UserHeader'

class PostList extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  // logic to render posts out as list, to keep render method uncluttered. UserHeader needs to show user, so need to pass down as prop.
  renderList () {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user' />
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  render () {
    console.log('this.props.posts', this.props.posts)
    return <div className='ui relaxed divided list'>{this.renderList()}</div>
  }
}
// our state object here is going have a property, posts and hold all the data the reducer has returned. Every time our reducers run mapStateToProps is going to be called again. Going to return a new object with property posts which is going to show up as the props object inside our component.
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostList)
// needs to get a list of posts from the Json api
// so going to define a componentDidMount lifecycle method on the class, going to place an action creator inside.
// so any time our PostList component shows on screen our action creator is going to be automatically called.
// Our action creator is going to use axios to make an api request over to the json api.
// in connect, null, as no state to pass in, then our action creator

/* fetchPosts is an action that we have passed into the connect function as a mapDispatchToProps argument in object form. Because we have done this, the action is now wrapped in the dispatch function and available to us to use as props.

https://react-redux.js.org/using-react-redux/connect-mapdispatch#providing-a-mapdispatchtoprops-parameter

You can confirm this by console logging this.props in that component, you will see fetchPosts listed, along side anything that is currently tracked in your Redux store or component level state.
*/
