import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: '',
  }
  // event callback, take value of input and assign it to our state property
  onInputChange = (e) => {
    this.setState({ term: e.target.value })
    console.log('e.target.value', e.target.value)
  }
  // callback handler on our form, so we can watch for any time the form gets submitted.
  onFormSubmit = (e) => {
    e.preventDefault()
    // to do: make sure we call callback from parent component, so we can tell the app that the user submitted the form and they probably want to attempt to initiate a new search of the youtube api.
    //call it with this.state.term so our parent component is told what the CURRENT search term is.
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Pexels Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

// changing size of input, use semantic-ui's sizes, mini, massive etc.
