import axios from 'axios'

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

// pre configured instance of axios
// get baseURL by copying url from address bar, removing /posts
// then go to actions file:
