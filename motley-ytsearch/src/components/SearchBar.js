import React, { Component } from 'react'

class SearchBar extends Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    // call with this.state.term, so parent is told what the current search term is.
    this.props.onFormSubmit(this.state.term)
  }
  // above, todo: make sure we call callback from parent component, so we can tell the app the user just submitted the form and they probably want to init a new search of the youtube api.

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

/*
 You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
    in input (at SearchBar.js:12)

    get the text working
    or could use:
    onChange={e => this.setState({term: e.target.value})}

    then need a callback handler on our form too.
*/
