import React, { Fragment, useState } from 'react'

const Accordion = ({ items }) => {
  // [] destructuring
  const [activeIndex, setActiveIndex] = useState(null)
  // helper fn, call setter and provide new value, at which point intial, null, value falls away, wont be used again.
  const onTitleClick = (index) => {
    setActiveIndex(index)
  }
  // active classname decides whether item will be expanded.
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : ''

    return (
      <Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className='dropdown icon' />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    )
  })
  return (
    <div>
      <div className='ui styled accordion'>{renderedItems}</div>
    </div>
  )
}

export default Accordion

/*
const [activeIndex, setActiveIndex] = useState(null)
first arg is the piece of state we are trying to keep track of, the second elemenent is a fn we call to update our piece of state, causes our entire component to automatically rerender.
Finally, whenever we call useState it takes one arg, and that is going to be the default value for our piece of state.
========================
items from props object

<div
          className='title active'
          onClick={() => console.log('Title Clicked', index)}
        >

        // helper fn
  const onTitleClick = (index) => {
    console.log('Title Clicked', index)
  }
  const renderedItems = items.map((item, index) => {
    return (
      <Fragment key={item.title}>
        <div className='title active' onClick={() => onTitleClick(index)}>
*/
