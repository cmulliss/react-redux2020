import React, { Component } from 'react'

class ImageCard extends Component {
  constructor(props) {
    super(props)
    // inistailse state, and default spans to 0, as image not loaded yet.
    this.state = {
      spans: 0,
    }

    this.imageRef = React.createRef()
  }

  // a plain vanilla event listener for image downloading. 2nd arg needed, so callback this.setSpans

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }
  // ultimate property that we are trying to set inside this thing is the grid-row-end property, and it took units of spans. Now should show heights as downloaded.
  // pull off height first. css gives 15px, Math.ceil to cap value. After we calc our spans, set it on state.
  setSpans = () => {
    const height = this.imageRef.current.clientHeight

    const spans = Math.ceil(height / 10 + 1)

    this.setState({ spans: spans })

    console.log(this.imageRef.current.clientHeight)
  }
  // add inline style for spans
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

// this component to render each individual image, as opposed to the image tag we are using in ImageList.

// destructured

// using refs system, create ref in constructor, assign to instance variable, then pass to a particular jsx element as props.

// img is jsx tag, not a DOM element, is eventually going to be turned into a DOM element. Use a specific event listener, that listens for image beign downloaded.

// let ImageCard render itself and image, because componentDidMount only gets called AFTER this gets rendered. Console log doesn't show height UNTIL you expand it in the console, initially shows 0. The instant we have rendered the image, the image itself has NOT actually loaded, not actually DOWNLOADED!

// is a workaround for this, a tiny refactor!
