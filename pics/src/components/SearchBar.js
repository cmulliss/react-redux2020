import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: '',
  }

  // dont want form to automatically submit itself, refresh
  // need to use => syntax, or will get 'undefined'
  // so, inside this searchbar, to reference the prop, onSubmit, we would say props.onSubmit
  // class based component using props, has 'this' keyword
  // call it with (this.state.term)

  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor='image-search'>Image Search</label>
          </div>
          <input
            type='text'
            name='image-search'
            placeholder='search'
            onChange={(e) => this.setState({ term: e.target.value })}
            value={this.state.term}
          />
        </form>
      </div>
    )
  }
}

export default SearchBar

// rather than the searchbar making the api request, we need to take the search term and pass it back up to the app component, and then the app component can make the api request for the list of images.

// callback, called with one arg, the event object
//onIputChange(event) {
//console.log('event.target.value:', event.target.value)
//}
// class based as needs state
// passing onChange={this.onIputChange} callback, as a prop, but no (), as don't want to call whenever component rendered.

// SearchBar needs to be a controlled component

// with controlled components can do things like force uppercase.
// onChange={(e) =>
// this.setState({ term: e.target.value.toUpperCase() })
