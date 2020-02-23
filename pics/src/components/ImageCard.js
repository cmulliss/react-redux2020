import React, { Component } from 'react'

class ImageCard extends Component {
  constructor(props) {
    super(props)

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    console.log('this.imageRef', this.imageRef)
  }

  render() {
    console.log('this.props', this.props)
    const { description, urls } = this.props.image
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    )
  }
}

export default ImageCard
// ImageCard getting its props from ImageList
// this should render an image
// ref and imageRef as prop
