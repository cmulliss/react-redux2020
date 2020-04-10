import React from 'react'

const SpinnerLoader = (props) => {
  return (
    <div>
      <div className='ui active dimmer'>
        <div className='ui big text loader'>{props.loadingMessage}</div>
      </div>
    </div>
  )
}

SpinnerLoader.defaultProps = {
  loadingMessage: 'Loading ...'
}

export default SpinnerLoader
