import React from 'react'

import './SeasonDisplay.css'

// instead of repetitive ternary objects, create a config
const seasonConfig = {
  Summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  Winter: {
    text: "Brr! it's chilly",
    iconName: 'snowflake',
  },
}

// logic outside component
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  }
}
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  //   const text = season === 'Winter' ? "Brr! it's chilly" : "Let's hit the beach!"
  //   const icon = season === 'Winter' ? 'snowflake' : 'sun'

  console.log('props.lat', props.lat)
  console.log('props.lon', props.lon)
  console.log('season', season)

  // destructure out text, iconName from seasonConfig
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon `} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
      <div />
    </div>
  )
}

export default SeasonDisplay

// 1st arg in any functional component, props. State as props from App.js
// controversial putting logic inside jsx, so can extract it.
// icons from semantic-ui library
