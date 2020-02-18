import React, { Component } from 'react'

class App extends Component {
  state = {
    lat: null,
    lon: null,
    errorMessage: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    )
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }
    if (!this.state.lat && !this.state.errorMessage) {
      return <div>Loading: {}</div>
    }
    return (
      <div>
        <h1>Seasons</h1>
        <div>Latitude: {this.state.lat}</div>
        <div>Longitude: {this.state.lon}</div>
        <div>Error: {this.state.errorMessage}</div>
      </div>
    )
  }
}
export default App

// using Geolocation API
// need to pass in 2 separate fn callbacks,
// first is position and is the 'success' callback
// the second, err, is the 'failure' callback
// console.log('position', position),
// (err) => console.log(err)
// current position call goes outside render, to prevent location being double fetched.
// want to update our state object AFTER we get our current location. First arg to getCurrentPosition is a callback fn, so will be called at some time in future. Use setState to update our object, latitude.
// conditionally rendering the error message
