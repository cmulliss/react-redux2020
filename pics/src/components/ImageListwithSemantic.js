import React from 'react'

import './ImageList.css'
import ListItem from './ListItem'
import { Grid } from 'semantic-ui-react'

const ImageList = (props) => {
  const listItems = props.images.map(({ id, urls, description }) => {
    return <ListItem key={id} value={urls.regular} description={description} />
  })

  return (
    <div>
      <Grid stackable>
        <Grid.Row columns={3}>{listItems}</Grid.Row>
      </Grid>
    </div>
  )
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
