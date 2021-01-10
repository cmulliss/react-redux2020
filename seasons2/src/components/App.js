import './App.css'

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  )
  return (
    <div>
      <h1>Lattitude:</h1>
    </div>
  )
}

export default App

// has code to determine location + month

// 2 fn callbacks to getCurrentPosition, first is success callback, followed by failure callback
