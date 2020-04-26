import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.pexels.com/videos',
  headers: {
    Authorization: '563492ad6f9170000100000106e7d14fbc364f8eba7c6bad7f84ed40',
  },
})
// preconfigured instance of axios client
