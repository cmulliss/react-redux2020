import axios from 'axios'

const KEY = 'AIzaSyD5HlauQxhmlNCZmjwkoIXJhi1QmBYqp7E'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})

// add type parameter 'video' to avoid errors, will then only search for videos.

// alternative key:
// AIzaSyD5HlauQxhmlNCZmjwkoIXJhi1QmBYqp7E

// first key:
// AIzaSyBd1qKoUr70RMTUl17nPCBkILyfFop2kNI
