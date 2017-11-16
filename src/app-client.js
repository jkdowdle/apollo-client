import ApolloClient from 'apollo-client'
// import { ApolloLink, concat } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import InMemoryCache from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

const link = new HttpLink({
  uri: `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/graphql`
})
const authLink = setContext(async (req, { headers }) => {
  const token = await localStorage.getItem('authorization')

  return {
    ...headers,
    headers: {
      authorization: token && token
    }
  }
})

const dataIdFromObject = item => item.id
const cache = new InMemoryCache({ dataIdFromObject })

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
  dataIdFromObject
})

export default client
