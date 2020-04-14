// to render out a list of the images we just fetched
import React from 'react'

import './ImageList.css'

const ImageList = (props) => {
  // console.log('props.images', props.images)
  const images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.regular} alt={description} key={id} />
  })
  return <div className='image-list'>{images}</div>
}

export default ImageList

// Want to return a list of images using map
// keys are assigned to the root element, a div or similar.
