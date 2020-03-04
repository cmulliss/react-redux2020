// action creator
export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
// redux will not magically connect this action creator to itself, need to use connect in the component, and mapStateToProps

// export default connect(mapStateToProps, {
//     selectSong: selectSong
//   })(SongList)

// We are passing the action object to the mapDispatchToProps argument of the connect function. When we do this, Redux provides the connected component with the action creator as props, so that we can call it to dispatch the action: this.props.selectSong(song).
// If we want to make sure an action eventually makes its way over to our reducers, we have to call that dispatch fn, we have to take the action that gets returned and we have to pass it into the dispatch fn.

// whenever we call the props.actioncreator, or the action creator that gets added to our props object, the connect fn is going to automatically take the action that gets returned and throw it into the dispatch fn for us.
// to call an action creator always need to pass it into the connect fn.
// we do not use dispatch directly, instead we wire up our action creators to the connect fn.
