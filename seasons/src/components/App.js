import React, { Component } from 'react'
import './App.css'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends Component {
  state = {
    lat: null,
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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    // taking a property from the state, on the App component, and passing it down as a prop into SeasonDisplay.
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    // make use of Spinner
    if (!this.state.lat && !this.state.errorMessage) {
      return <Spinner message='Please accept location request' />
    }
    return (
      <div>
        <h1>Seasons</h1>
        <div>Latitude: {this.state.lat}</div>
        <div>Error: {this.state.errorMessage}</div>
      </div>
    )
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>
  }
}
export default App

// A lot of conditional logic inside render() method. So, going to create a helper fn to contain all the code currently inside render().

// using Geolocation API
// need to pass in 2 separate fn callbacks,
// first is position and is the 'success' callback
// the second, err, is the 'failure' callback
// console.log('position', position),
// (err) => console.log(err)
// current position call goes outside render, to prevent location being double fetched.
// want to update our state object AFTER we get our current location. First arg to getCurrentPosition is a callback fn, so will be called at some time in future. Use setState to update our object, latitude.
// conditionally rendering the error message

