import React, { Component } from 'react'

import SearchBar from './SearchBar'
import pexelsvideo from '../apis/pexelsvideo'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }
  // callback method to be called any time someone submits the form, onTermSubmit as state inside SearchBar is term.
  // add this callback as a prop to SearchBar.
  onTermSubmit = async (term) => {
    const response = await pexelsvideo.get('/search', {
      params: {
        query: term,
        per_page: 8,
      },
    })
    // want to render a list of the newly fetched videos to our screen.  Need to get a reference to the list of videos, our list of videos is contained within response.data.videos
    this.setState({ videos: response.data.videos })

    console.log('response', response)
    console.log('response.data.videos', response.data.videos)
  }

  //callback, down to VideoList, then down to VideoItem. The video object we select here is the object we fetch from the API. Then pass a reference to this callback down to VideoList as prop, then go to VideoList and ref the props object.
  // Need to make sure onVideoSelect takes the video and sets it on state.
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
    console.log('video, from the App', video)
  }

  render() {
    return (
      <div className='ui container'>
        <div>video search app</div>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    )
  }
}

export default App

// on VideoDetail, video as only one, get errror cannot read property 'user' of null, as have selectedVideo: null, in the state. Add a simple check inside VideoDetail.

// <VideoList videos={this.state.videos} />
// I have{' '}
// {this.state.videos.length} videos

//

// want to take the list of videos that are received and set them as state on our App. That's going to allow our App to update or rerender itself, which is then going to allow us to render those newly fetched videos as a list onto the screen.

// pass in prop, videos, to VideoList

// we want to get a click event on our VideoItem, to make a change on the app state.
