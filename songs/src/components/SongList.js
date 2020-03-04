import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

// any time button clicked, ie any one calls this, want to run a fn that's going to call this.props.selectSong, pass in the current song we are iterating over.
class SongList extends Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      )
    })
  }

  render() {
    // this.props === {songs: state.songs}
    console.log('this.props from SongLst', this.props)
    return <div className='ui divided list'>{this.renderList()}</div>
  }
}

// state: all the data from our redux store, any time we change our redux state, or rerun our reducers and produce a new state object, mapStateToProps fn will rerun with the newly created state. (ie, when we click the button)
const mapStateToProps = (state) => {
  console.log('state:', state)

  return {
    songs: state.songs
  }
}
// 2nd arg to connect fn, pass in an object, key of selectSong, and a value of the action creator we imported, selectSong. connect fn is going to take that action creator and pass it into our component as a prop.
export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList)

// Connect component defined in SongList component as will need to create connect fn to reach up and get that list of songs
// import instance of connect, note: lower case.
// connect returns a fn, and when we put on the 2nd set of () to return the fn.
// Going to tell connect that we want to get a list of songs out of our redux store, from the Provider.
// So, anytime our list of songs inside the store changes, the provider is going to automatically notify the connect fn, and the connect fn is goign to pass our list of songs down to our SongList component.
// mapStateToProps is going to take the state from the store and map it to turn up as props inside our component. Is called with all the state from the redux store, in this case our entire list of songs from the songListReducer, and our currently selected song from the selectedSongReducer.
// after defining mapStateToProps, pass it as first arg to connector fn.

// always going to import connect at top
// always going to call connect and pass in our component as 2nd fn call
// always going to define mapStateToProps
// mapStateToProps is always going to get a first arg of state
// always going to return an object which is going to show up as props inside the component

// In the console, can see the action creator, selectSong as well as an array of songs. If we call it, it's going to automatically take the action that gets returned and send it in to redux's dispatch fn.

// We are passing the action object to the mapDispatchToProps argument of the connect function. When we do this, Redux provides the connected component with the action creator as props, so that we can call it to dispatch the action: this.props.selectSong(song).
