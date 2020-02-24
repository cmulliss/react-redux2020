import React, { Component } from 'react'

class ImageCard extends Component {
  constructor(props) {
    super(props)
    // until loads image only requires 0 space
    this.state = { spans: 0 }

    this.imageRef = React.createRef()
  }
  // passing a callback to an event listener
  componentDidMount() {
    const height = this.imageRef.current.clientHeight

    const spans = Math.ceil(height / 10)

    this.imageRef.current.addEventListener('load', this.setSpans)

    this.setState({ spans: spans })
  }

  setSpans = () => {
    console.log(
      'this.imageRef.current.clientHeight',
      this.imageRef.current.clientHeight
    )
  }

  render() {
    console.log('this.props', this.props)
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
