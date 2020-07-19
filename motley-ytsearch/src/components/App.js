import React, { Component } from 'react'

import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'

const KEY = 'AIzaSyCuQi9RmHLL97Hkbrp5-uzGBueZDP5fM7k'

class App extends Component {
  state = { videos: [] }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    })
    this.setState({ videos: response.data.items })
  }
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} videos.
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App

/*
the list of videos in contained in response.data.items,

We want to take the list of videos received and set them as state on our App component. That's going to allow App to update itself, or render itself, which is then going to allow us to render the newly fetched videos as a list to the screen.

passing a prop down into VideoList, called videos, which is going to be a ref to the [] of videos we call anytime we call onTermSubmit. State as props.

Add a callback method to our class App, that will be called anytime someone submits the SearchBar form, onTermSubmit, that will be called with some search string. Then add this as a prop to <SearchBar />. Then go to SearchBar.js.

const KEY = 'AIzaSyCuQi9RmHLL97Hkbrp5-uzGBueZDP5fM7k'

Axios Version Bug & 400 "Required Parameter: part" Error
Updated 3-18-2020

In the upcoming lecture, we will be creating an axios config instance to call the YouTube API. Starting with release v0.19.0 there is a bug that fails to merge the parameters from the config instance. This will cause a 400 error failure with the message "Required Parameter : part"

Here are two ways we can deal with this:
1. Install a specific version of axios:
npm install axios@0.18.1
2. Move the Params object to the App.js axios call

This is what your axios code should look like at the end of "Putting it all Together" lecture

apis/youtube.js:

import axios from "axios";
 
export default axios.create({
     baseURL: "https://www.googleapis.com/youtube/v3"
});
App.js:

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });

*/
