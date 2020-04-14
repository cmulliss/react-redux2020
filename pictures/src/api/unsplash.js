// setting up a preconfigured instance of the axios request
import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 28g3lj1uoXSXbedMwx1n6SNAcS57hShHV4xaEk9cX20',
  },
})

/* all the code in here for config of axios, related to somehow getting unsplash to accept our request
export default and headers, baseURL
the 'create' method is going to create an INSTANCE of the axios client with a couple of defaulted properties.
*/
