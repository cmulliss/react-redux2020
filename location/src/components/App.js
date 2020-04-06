import React, { Component } from 'react'

import SeasonDisplay from './SeasonDisplay'

// wont be instant, so need to pass in 2 fn callbacks
class App extends Component {
  state = {
    lat: null,
    errorMessage: '',
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      // failure callback
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay />
    }
    return <div>Loading ...</div>
  }
}

export default App

// we know the 'position' object contains the latitude.
// usi9ng state to get round the 'delay' issue here.
// default numbers to null.
// render method gets called frequently, so care about calls within it, move elsewhere.
/*
// move call here from render method
  window.navigator.geolocation.getCurrentPosition(
    // first callback, success callback
    (position) => console.log('position', position),
    // failure callback
    (err) => console.log(err)
  )
*/
