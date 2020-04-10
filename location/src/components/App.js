import React, { Component } from 'react'

import SeasonDisplay from './SeasonDisplay'
import SpinnerLoader from './SpinnerLoader'

// wont be instant, so need to pass in 2 fn callbacks
class App extends Component {
  state = {
    lat: null,
    lon: null,
    errorMessage: '',
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      // failure callback
      (err) => this.setState({ errorMessage: err.message })
    )
  }
  // helper fn, to take conditional out of render, so can do something to content, like red border.
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <SpinnerLoader message='Please accept location request' />
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>
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
// adding prop to SeasonDisplay, taking prop from state and passing it as a prop down into SeasonDisplay. When we call setState causes SeasonDisplay to be updated.
