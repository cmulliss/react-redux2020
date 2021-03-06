import React from 'react'

import './ImageList.css'
import ImageCard from './ImageCard'

// props from App, of images.
// the inner => fn is going to be called with each image from our list of images.
const ImageList = (props) => {
  // passing the [] that gets created to images
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })
  // console.log('props.images', props.images)
  return <div className='image-list'>{images}</div>
}

export default ImageList

/*
const images = props.images.map((image) => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
      use {} inside map, to destructure off.

(is destructured, but now in ImageCard)
const images = props.images.map(({ description, id, urls }) => {
    return <img src={urls.regular} alt={description} key={id} />
  })
*/
