import React, { Component } from 'react'
import unsplash from '../api/unsplash'

import './App.css'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends Component {
  state = {
    images: [],
  }
  // convert to arrow fn, while using async, await
  // asyc goes before (term)
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })
    // console.log('response.data.results', response.data.results)
    console.log('this', this)
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div>
        <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar
            onSubmit={this.onSearchSubmit}
            guessWhatIam='I am the props object'
          />
          <ImageList images={this.state.images} />
        </div>
      </div>
    )
  }
}
export default App

// want to pass search up from SearchBar
// define our callback fn on App, onSearchSubmit(term), then take this method and pass it down into the SearchBar as a prop.
// the get fn 2 args, address making request to, and 2nd an object with options to customise.
// in unsplash, schema, location. Then Authorization, public actions, finally, Search, search photos.

// want some code in here that lets us know when network request completed, is asynchronous, so takes some time. By the time we get a response will have already exited onSearch method. Async keyword in front of fn name, allows us to use the async / await syntax inside the fn, ie in front of the netword request. Asign new variable too, const response.

// we want to add state to this component, so when we get response from api, we set it on our component state which will cause our component to rerender and then we can 'print' out the number of images fetched (for now)

// error message: setState is not a fn. Console logging 'this' shows value is onSubmit. We have a callback fn, onSearchSubmit that we pass down to some child component. That search bar is then going to call that fn at some point in time, in the future. Looking to left, value of this is going to be props. So, this.props, or the props object that was passed to the search bar, is going to be the value of 'this' inside 'onSubmit'.
// replace import of axios with unsplash config file
// props to communicate list of images down to ImageList
