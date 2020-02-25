import axios from 'axios'

const KEY = 'AIzaSyDcOefuvEeAU76AyZ7uIEuXAufmaM5evok'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})

// pre configured instance of axios that has a base URL and some default parmeters loaded. Will be able to do something like:
// youtube.get('/search) is appended to baseURL
// then 'params' is going to contain all the different query string parameters we want to have added on to the request.
