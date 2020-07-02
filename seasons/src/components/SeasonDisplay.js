import './SeasonDisplay.css'
import React from 'react'



// new configuration object with 2 key:value pairs, easy to update.
const seasonConfig = {
  Summer: {
    text: 'Lets hit the beach',
    iconName: 'sun'
  },
  Winter: {
    text: 'Brr, it is chilly!',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter'
  } else {
    return lat > 0 ? 'Winter' : 'Summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  // to reference the config file, is going to return our object with the text and iconName inside {text, iconName}
  // destructure out
  const { text, iconName } = seasonConfig[season]

  // root div className matches component name, using 2015 template strings
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`} />
    </div>
  )
}
export default SeasonDisplay

/*
const text = season === 'Winter' ? 'Brr, it is chilly!' : 'Lets hit the beach'
  const icon = season === 'Winter' ? 'snowflake' : 'sun'

  // should be a lat property on props
  // console.log('props.lat', props.lat)

debateable whether to put expression in jsx or take our as const
semantic-ui for icons.
'massive' from semantic-ui icons, icon-left etc from css file.
Also can do a loading spinner with semantic-ui.

*/
