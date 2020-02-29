import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  // default search
  componentDidMount() {
    this.onTermSubmit('buildings')
  }
  // fetch a list of videos and then use setState to update App, would be good to update selected video at same time.
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log('response', response)
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }
  // callback, called with some video object, fetched from API, then pass a reference to this callback down to the VideoList.
  // onVideoSelect needs to take the video selected here, takes that video and sets it on our state, on the selectedVideo property.
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
    console.log('video from the App', video)
  }

  // pass a prop 'videos' into VideoList
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
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
// using semantic-iu's grid system for VideoDetail
// need default search term, use componentDidMount
//
