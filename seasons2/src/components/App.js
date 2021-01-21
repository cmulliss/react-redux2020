import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import './App.css'
class App extends Component {
    state = {
        lat: null,
        lon: null,
        errorMessage: ''
    }
    // code error if component not mounted, also want to do this one time only. Don't do data loading in constructor, this is better, do it all inside componentDidMount.
componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        // first callback
        position => 
            this.setState({
                lat:position.coords.latitude,
                lon: position.coords.longitude
            }),
        // 2nd callback
        (err) => 
            this.setState({errorMessage: err.message})
        
      )
    }
  render () {
    if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
     if (!this.state.errorMessage && this.state.lat) {
         return <SeasonDisplay lat={this.state.lat}/>
     }
   return <Spinner/>
  }
}
export default App

/* has code to determine location + month

2 fn callbacks to getCurrentPosition, first is success callback, followed by failure callback

when we make a classe we are making a class with one method, render attached to it, but can pull in other methods.

class, so can use state now. To get a component to rerender itself we update its state, using setState.

If in render(), the getCurrentPosition will cause repeated rendering, so move it. Supply it with a callback fn too.

in render, we are taking a prop from the states on the App component and passing it a prop down into the SeasonDisplay.

*/
