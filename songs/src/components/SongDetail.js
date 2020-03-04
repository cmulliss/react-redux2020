import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  // console.log('props from SongDetail', song)
  if (!song) {
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {song.title} </p>
      <p>Duration: {song.duration}</p>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)

// want to wrap this within connect so can get info from redux store
// / inside SongDetail should now be getting a props object that is going to contain the currently selected song.

// instead of receiving entire props object, destructure out the props object:
// const SongDetail = (props) => {
//   becomes
// const SongDetail = ({ song }) => {
// to avoid doing props.song.title etc

// selected song starts as null, so add conditional check.
