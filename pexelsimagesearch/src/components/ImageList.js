import React from 'react'

import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  // no longer destructuring as using ImageCard
  // pass the image object in as a prop 'image'.
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })

  console.log('props.images', props.images)

  return <div className='image-list'>{images}</div>
}
export default ImageList
// using props to communicate the list of images down from App.
// assign the [] that gets created, to images, then reference that variable inside the div.
