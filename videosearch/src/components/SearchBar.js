import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: '',
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value })
    console.log('e.target.value', e.target.value)
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    // make sure we call callback from parent component.
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
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

// make a controlled component, so storing data inside component, not inside the DOM

// now that input text is working, want to make sure we have a callback handler on the form as well, so we can watch for every time it gets submitted. Any time user submits form, we are going to call a callback method of 'onFormSubmit', with event handler.
