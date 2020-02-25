import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

class App extends Component {
  state = {
    videos: []
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log('response', response)
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos
      </div>
    )
  }
}

export default App
// NB styling on container
// initialise state in
// // callback method, onTermSubmit, to be called (with search term) everytime the search bar form is submitted. Add this callback as a prop on SearchBar
// we are going to take the list of videos that are received and set them, as state, on our App component. That's going to allow our App component to update itself or rerender itself, which is then going to allow us to render those newly fetched videos out as a list onto the screen.
//console.log(term)
// preconfigured instance of axios, search endpoint
// async operation as api request, need either promises or async /await syntax. await goes in front of the api request. Then in front of await, asign the response to a variable called response.
// the list of videos we can about is contained in:
// response.data.items
// initialise state on App
// now, any time our component is first created it is going to have a this.state.videos property that starts empty, then after a user searched we get back list of videos, we take this list of videos and set them on our state.
// this.setState({ videos: response.data.items })
