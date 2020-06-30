import React, { Component } from 'react'
import './App.css'
import SeasonDisplay from './SeasonDisplay'
// import Spinner from './Spinner'

class App extends Component {
  // initially 'null' as don't yet know the number, then taking a property from the state, on the App component, and passing it down as a prop into SeasonDisplay.
  state = {
    lat: null,
    errorMessage: '',
  }
  //

  //
  componentDidMount() {
    // callback, don't want this in render method
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      // second callback, need to handle errors
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    )
  }

  // make use of Spinner

  // passing state (lat) as a props down into SeasonDisplay
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    if (!this.state.lat && !this.state.errorMessage) {
      return <div>Loading ...</div>
    }
  }
}
export default App
/*

A lot of conditional logic inside render() method. So, going to create a helper fn to contain all the code currently inside render().

using Geolocation API
need to pass in 2 separate fn callbacks,
first is position and is the 'success' callback
the second, err, is the 'failure' callback
console.log('position', position),
(err) => console.log(err)
current position call goes outside render, to prevent location being double fetched.
want to update our state object AFTER we get our current location. First arg to getCurrentPosition is a callback fn, so will be called at some time in future. Use setState to update our object, latitude.
conditionally rendering the error message

   window.navigator.geolocation.getCurrentPosition(
      (position) =>
        console.log('position.coords.latitude', position.coords.latitude),
      // second callback
      (err) => console.log('err', err)
    )


    In the questions, need to check it works
    render() {
    return (
      <div>
        {this.state.lat
          ? this.state.lat
          : this.state.error
          ? this.state.error
          : 'Loading'}
      </div>
    );
  }
It's especially convenient when you have 2 possible states (for example state.item: 'item' and state.item: null).

*/
