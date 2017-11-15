import ApolloClient from 'apollo-client'
// import { ApolloLink, concat } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import InMemoryCache from 'apollo-cache-inmemory'

console.log('hey', `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/graphql`)

const link = new HttpLink({
  uri: `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/graphql`
})

const dataIdFromObject = item => item.id
const cache = new InMemoryCache({ dataIdFromObject })

export const client = new ApolloClient({
  link,
  cache,
  dataIdFromObject
})

export default client
