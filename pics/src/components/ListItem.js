import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

class ListItem extends Component {
  render() {
    return (
      <Grid.Column style={{ marginTop: 20 }}>
        <Image src={this.props.value} alt={this.props.description} />
      </Grid.Column>
    )
  }
}

export default ListItem

// ImageCard getting its props from ImageList
// this should render an image
// ref and imageRef as prop
// use createRef, then add as prop to image.
// the ref itself is a js object that has a currenty property, and the current property references a dom node, in this case the 'image'.
// refactor this so we only try to access the height AFTER it has become available.
// thisimageRef.current gives us a direct reference to the image tag, and then we are going to add an event listener.We are going to listen for the event 'load', any time an image successfully downloads from the internet and displays on the screen it emits a load event. So, can now get actual height of the image.
// As a callback adding a 2nd arg, this.setSpans
// then define a setSpans property on the class
// refs return 'current' properties
/*
componentDidMount() {
    console.log('this.imageRef', this.imageRef)
    console.log(
      'this.imageRef.current.clientHeight',
      this.imageRef.current.clientHeight
    )
  }

*/
