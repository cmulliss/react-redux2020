import React from 'react'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  const text = season === 'Winter' ? 'Brrr, it\'s chilly!' : 'Let\'s hit the beach!'
  return (
    <div>
      <h1>{text}</h1>
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
