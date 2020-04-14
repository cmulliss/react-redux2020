import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    term: '',
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)

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
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar

// setState makes component rerender, takes the value of the input, this.state.term and assigns it to the 'value' prop of the input, will overwrite whatever text is already in the input.
// Avoids storing data inside the DOM, but in react instead. Storing info on state, not DOM.
// can force things like uppercase:
// onChange={(e) =>
// this.setState({ term: e.target.value.toUpperCase() })

// onInputChange() called every time someone changes text, also add new prop to input
// in the jsx, we pass a reference to a fn, onInputChange, it is a callback fn, but don't want to call it immediately, so no ().

// replace with an => fn, still called with the event object. Abbreviated syntax.
// <input type='text' onChange={(e) => console.log(e.target.value)} />

// refactor to controlled, from uncontrolled.
// removing event handler and adding state, then, onChange using setState, also new prop 'value'
