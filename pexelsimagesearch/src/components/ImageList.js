import React from 'react'

const ImageList = (props) => {
  // sestructuring off (image)
  // from const images = props.images.map((image)
  const images = props.images.map(({ src, id, photographer }) => {
    return <img src={src.medium} key={id} alt={photographer} />
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
