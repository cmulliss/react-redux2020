import React, { Component } from 'react'

class ImageCard extends Component {
  constructor(props) {
    super(props)
    // before image loads requires 0 space
    this.state = { spans: 0 }

    this.imageRef = React.createRef()
  }

  // gets called after ImageCard renders itself and its image, console log entire DOM node, that entire image.
  // way too early to access image, from componentDidMount, as image not loaded up.
  // need to refactor here with js event listener, load and a callback 'setSpans'.
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
    // doesn't work as console logging BEFORE image has loaded up.
  }
  // callback which is being added to our event listener
  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    this.setState({ spans })

    console.log(
      'this.imageRef.current.clientHeight',
      this.imageRef.current.clientHeight
    )
  }
  // take spans value and assign as a style
  render() {
    // destructuring
    const { src, photographer } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={photographer} src={src.large} />
      </div>
    )
  }
}
export default ImageCard
// this is one image

// nb, with destructuring only src, for example in the const, but src.medium in return.

// using this component to render an image and then, dynamically give it just enough space to show up nicely inside our grid layout.
