import React, { Component } from 'react'
import axios from 'axios'
// import unsplash from '../api/unsplash'

import SearchBar from './SearchBar'
// import ImageList from './ImageList'

class App extends Component {
  state = {
    images: [],
  }
  async handleSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 5n4sqSgKNCOPOE8-gfmI6zVIAyjHggzn9hfRHhPt0Cs',
      },
    })
    this.setState({ images: response.data.results })
  }
  // console.log('response.data.results', response.data.results), this contains the list of images we care about.

  // define a new prop on the ImageList, called images, and pass all the images we have inside our state object.
  // define prop on SearchBar, is our callback being passed down as prop, onSearchSubmit
  render() {
    return (
      <div className='ui container' style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
      </div>
    )
  }
}
export default App

/*
define callback fn on the App, this is the fn that is ultimately going to be invoked.
this is how we define an arrow fn as async and assign it to an instance property.

only purpose of SearchBar is to allow user to type in some input and then submit by hitting enter.
need to take the search term ansd pass it back up to the App, which can then make API requests and getting list of images.
need to make a get request to axios, 2 args, address to which we are making the request, and object with options to customise this request.
will add header for authorisation access key, using 'headers' object. Also need to include a parmeter, 'query' containing the search term.
when making request with axios, returns a promise, like a little notification when some amount of work, like a network request is completed, (to get little tap on shoulder when the request is completed). We pass the .then , an => fn callback which will be called at some future point with whatever data we got back from the unsplash api.
OR, remove .then, and put async keyword in front of onSearchSubmit fn, allows us to use the 'async await' syntax inside the fn. Put 'await' in front of the network request, and asign a new variable 'response'.
initialise state, then use setState. So, after making request over to unSplash we get the response, we pull the actual results or the list of images, set it on our state object and that will cause our component to rerender.
finally, under the search bar, want to print out the number of images fetched.
want to move configuration out of here to api folder, unsplash file.
import config file and change 'axios.get' to 'unsplash.get'.

class App extends Component {
  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 5n4sqSgKNCOPOE8-gfmI6zVIAyjHggzn9hfRHhPt0Cs',
      },
    })
  }
*/
