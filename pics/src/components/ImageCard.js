import React, { Component } from 'react'

class ImageCard extends Component {
  // creat a ref and assign it to some instance variables that we can refer back to it later on inside class.
  state = { spans: 0 }

  imageRef = React.createRef()

  // to early to get the height, as we don't yet have the image loaded up, add plain vanilla event handler, once it emits this 'load' it means we have successfully downloaded the image
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  // passing a callback to an event listener
  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    // row height 150px, add one to round up to next row, then set on state
    const spans = Math.ceil(height / 10)

    this.setState({ spans: spans })
  }

  // new prop on img, imageRef
  render() {
    const { description, urls } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    )
  }
}

export default ImageCard
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
