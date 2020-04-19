import React from 'react'

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img src={image.src.small} key={image.id} alt={image.photographer} />
  })

  console.log('props.images', props.images)

  return (
    <div>
      <div>{images}</div>
    </div>
  )
}
export default ImageList
// using props to communicate the list of images down from App.
// assign the [] that gets created, to images, then reference that variable inside the div.
