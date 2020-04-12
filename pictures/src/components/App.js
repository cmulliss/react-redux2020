import React, { Component } from 'react'

import './App.css'
import SearchBar from './SearchBar'
// import ImageList from './ImageList'

class App extends Component {
  onSearchSubmit = (term) => {
    console.log('term', term)
  }

  render() {
    return (
      <div>
        <div className='ui container' style={{ marginTop: '10px' }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </div>
    )
  }
}

export default App

// want to pass search up from SearchBar
// define our callback, onSearchSubmit(term), then take this method and pas sit down into the SearchBar as a prop.
