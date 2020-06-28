import React from 'react'

// receiving props object from App.js
const Spinner = (props) => {
  console.log('props:', props)
  return (
    <div className='ui active dimmer'>
      <div className='ui text loader'>{props.message}</div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading...',
}

export default Spinner

// default props if no message prop passed in, is more elegant
