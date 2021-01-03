import './App.css'

const App = () => {
  return (
    <div className='ui container comments'>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img alt='avatar' />
        </a>
        <div className='content'>
          <a href='/' className='author'>
        Sam
          </a>
          <div className='metdata'>
            <span className='date'>Today at 6:000PM</span>
          </div>
          <div className='text'>Nice Blog Post</div>
        </div>
      </div>
    </div>
  )
}

export default App

/*
<img alt="avatar" src={faker.image.image()} />
*/
