import React, { Component } from 'react'

import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'

class App extends Component {
  state = {
    videos: [],
  }
  // callback method to be called any time someone submits the form, onTermSubmit as state inside SearchBar is term.
  // add this callback as a prop to SearchBar.
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    })
    // our list of videos is contained within response.data.items
    this.setState({ videos: response.data.items })

    console.log('response', response)
  }
  render() {
    return (
      <div className='ui container'>
        <div>video search app</div>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App

// want to take the list of videos that are received and set them as state on our App. That's going to allow our App to update or rerender itself, which is then going to allow us to render those newly fetched videos as a list onto the screen.

// pass in prop, videos, to VideoList

// const KEY = 'AIzaSyBd1qKoUr70RMTUl17nPCBkILyfFop2kNI'
