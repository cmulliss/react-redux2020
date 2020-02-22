import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'

class App extends Component {
  // define callback fn on the App, this is the fn that is ultimately going to be invoked.
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 5n4sqSgKNCOPOE8-gfmI6zVIAyjHggzn9hfRHhPt0Cs'
      }
    })
    console.log('response.data.results;', response.data.results)
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
// only purpose of SearchBar is to allow user to type in some input and then submit by hitting enter.
// need to take the search term ansd pass it back up to the App, which can then make API requests and getting list of images.
// need to make a get request to axios, 2 args, address to which we are making the request, and object with options to customise this request.
// will add header for authorisation access key, using 'headers' object. Also need to include a parmeter, 'query' containing the search term.
// when making request with axios, returns a promise, like a little notification when some amount of work, like a network request is completed, (to get little tap on shoulder when the request is completed). We pass the .then , an => fn callback which will be called at some future point with whatever data we got back from the unsplash api.
