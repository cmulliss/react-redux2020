import React from 'react'
import './SeasonDisplay.css'

const seasonConfig = {
  Summer: {
    text: 'Let\'s hit the beach!',
    iconName: 'sun'
  },
  Winter: {
    text: 'Brrr, it\'s chilly!',
    iconName: 'snowflake'
  }
}

// helper fn
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

// destructure seasonConfig
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1 className='text'>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay

/* has code to show different text and icons based on props

using the geolocation API, built into most browsers
using current location in this case

Everytime state in App updates its lat property, the new lat value is going to be put into SeasonDisplay, and this will rerender

  console.log('lat', props.lat)
    console.log(season)

debateable whether logic should go inside return expression.

*/
