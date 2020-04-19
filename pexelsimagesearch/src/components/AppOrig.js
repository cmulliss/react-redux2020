import React, { Component } from 'react'

import SearchBar from './SearchBar'
import ImageList from './ImageList'
import pexels from '../api/pexels'

class App extends Component {
  // initialise state, and set list of images on state, so images property and empty array, as expect an array.
  state = {
    images: [],
  }
  // loading data into our app, api, network request to api.

  // callback fn on App, then can take this method and pass it down into SearchBar as a prop.
  // this is the fn, we passed in onSearchSubmit, on the onSubmit props, that untimately gets invoked.
  // once we get our response, want to set it on our component state
  onSearchSubmit = async (term) => {
    const response = await pexels.get('/v1/search/', {
      params: { query: term, per_page: 10 },
    })
    // once we get this response, we set it on our component state, which will cause our component to rerender and then we can print out the number of images fetched.
    console.log('response.data.total_results', response.data.total_results)
    // update my state
    this.setState({ images: response.data.total_results })
  }
  // Inside the SearchBar, to reference the prop we say props.onSubmit
  render() {
    return (
      <div className='container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App

// define a new prop on ImageList, called images, and in it pass all the images we have inside our state object.

// pexels API key:
// 563492ad6f9170000100000106e7d14fbc364f8eba7c6bad7f84ed40
