import axios from 'axios'

const KEY = 'AIzaSyCuQi9RmHLL97Hkbrp5-uzGBueZDP5fM7k'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
})
