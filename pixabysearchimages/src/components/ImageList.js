// to render out a list of the images we just fetched
import React from 'react'

import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  // console.log('props.images', props.images)
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })
  return <div className='image-list'>{images}</div>
}

export default ImageList

// Want to return a list of images using map
// keys are assigned to the root element, a div or similar.
