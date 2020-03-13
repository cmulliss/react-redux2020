import React, { Component } from 'react'
import { connect } from 'react-redux'

// dont want UserHeader to fetch its own data as using fetchPostsAndUsers
class UserHeader extends Component {
  // find the user we want
  render () {
    const { user } = this.props
    if (!user) {
      return null
    }

    return (
      <div>
        <div className='header'>{user.name}</div>
        <div />
      </div>
    )
  }
}
// can do precalculations of values coming in as props, and redux state here, use ownProps, is a reference to the props that are about to go into the component
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader)

// want to call an action creator inside here, that's going to fetch the appropriate user.
// need to get access to our redux level state, so define mapStateToProps fn. Called with a state arg. So now our component is going to have access to a prop called this.props.users
