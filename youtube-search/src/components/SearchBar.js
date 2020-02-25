import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: ''
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }
  // to do, make sure we call callback from parent component every time user submits form. Want to make sure we call that prop any time user submits form.
  onFormSubmit = (event) => {
    event.preventDefault()
    // so parent component it told what current search term is
    this.props.onFormSubmit(this.state.term)
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
// initialise state in SearchBar, term to empty
// if assign a value in input, making it a controlled component, need to also add an onChange event handler, or won't allow input to change.
// then add onChange prop, pass it a callback method, this.onInputChange. Define above, and as an event callback define as => fn.
// this.setState is going to update my term property with a value from event.target.value.
// NB could do:
// onChange={e => this.setState({term: e.target.value})}
// instead of separate method above
// also want a callback on the form too, so can watch for any time the form gets submitted. So any time a user submits the form, we are going to call a callback method of this.onFormSubmit.
// call callback from parent component, so that we can tell the app that the user just submitted the form and that they probably want to initiate a new search of the youtube api.
