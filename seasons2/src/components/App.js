import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
    state = {
        lat: null,
        lon: null,
        errorMessage: ''
    }

    // error if component not mounted
componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        // first callback
        position => {
            this.setState({
                lat:position.coords.latitude,
                lon: position.coords.longitude
            })
        },
        // 2nd callback
        (err) => {
            this.setState({
                errorMessage: err.message
            })
        }
      )
    }
  render () {
    
    return (
      <div>
        <p>Lattitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lon}</p>
        <p>Error: {this.state.errorMessage}</p>
      </div>
    )
  }
}

/* has code to determine location + month

2 fn callbacks to getCurrentPosition, first is success callback, followed by failure callback

when we make a classe we are making a class with one method, render attached to it, but can pull in other methods.

class, so can use state now. To get a component to rerender itself we update its state, using setState.

If in render(), the getCurrentPosition will cause repeated rendering, so move it. Supply it with a callback fn too.

*/
