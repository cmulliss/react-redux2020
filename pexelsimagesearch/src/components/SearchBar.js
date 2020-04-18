import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: '',
  }
  // callback
  onInputChange = (e) => {
    console.log('e.target.value', e.target.value)
  }
  // callback
  // Inside the SearchBar, to reference the prop from App, we say props.onSubmit. Whenever user submits the form we are going to run onFormSubmit. We take the event, prevent default, and then look at our props object, and we call the fn that was passed in as the onSubmit prop, then we invoke that fn with this.state.term.  
  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

// class based, state to handle user input
// onInputChange is a callback
// initialising our state
// every time types in update term property, we are updating state with new input from user
// set new value, this.state.term
// the value prop will overwrite whatever is already in the input. Can also force it to say, uppercase.
// value={this.state.term.toUpperCase()}
