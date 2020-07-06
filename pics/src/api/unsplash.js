import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5n4sqSgKNCOPOE8-gfmI6zVIAyjHggzn9hfRHhPt0Cs',
  },
})

// can setup a preconfigured instance of the axios client, that has default properties set for where it's going to make a request to, or headers and even params if wanted.
// the 'create' method is going to create an instance of the axios client with a couple of defaulted properties.
