import React from 'react'

import Accordion from './Accordion'
import './App.css'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
]

const App = () => {
  return (
    <div className='ui container'>
      <Accordion items={items} />
    </div>
  )
}

export default App

// need to receive a prop called items, can map it etc.
