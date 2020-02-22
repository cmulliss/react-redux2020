import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }
  // dont want form to automatically submit itself
  // need to use => syntax, or will get 'undefined'
  onFormSubmit = (event) => {
    event.preventDefault()
    // class based component using props, has 'this' keyword
    // call it with (this.state.term)
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

// // callback, called with one arg, the event object
//onIputChange(event) {
//console.log('event.target.value:', event.target.value)
//}
// class based as needs state
// passing onChange={this.onIputChange} callback, as a prop, but no (), as don't want to call whenever component rendered.

// SearchBar needs to be a controlled component

// with controlled components can do things like force uppercase.
// onChange={(e) =>
// this.setState({ term: e.target.value.toUpperCase() })
