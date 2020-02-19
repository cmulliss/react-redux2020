import React from 'react'

// new configuration object with 2 key:value pairs
const seasonConfig = {
  Summer: {
    text: "Let's hit the beach",
    iconName: 'sun'
  },
  Winter: { text: "Brr, it's chilly", iconName: 'snowflake' }
}

// fn to determine season, outside component
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  // destructure out the text and iconName from seasonConfig
  const { text, iconName } = seasonConfig[season] // text, iconName

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  )
}
export default SeasonDisplay

// debateable whether to put expression in jsx or take our as const
// semantic-ui for icons.
