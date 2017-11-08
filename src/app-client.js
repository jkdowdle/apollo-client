import ApolloClient from 'apollo-client'
// import { ApolloLink, concat } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import InMemoryCache from 'apollo-cache-inmemory'

const link = new HttpLink({
  uri: `http://${process.env.REACT_APP_SERVER_HOST}:${process.env.REACT_APP_SERVER_PORT}/graphql`
})

// const latencyMiddleware = new ApolloLink((operation, forward) => {
//   // console.log('operation', operation)
//   // console.log('forward', forward)
//   setTimeout(() => {
//     console.log('latency')
//     forward(operation)
//   }, 1500)

//   // return forward(operation)
// })

const dataIdFromObject = item => item.id
const cache = new InMemoryCache({ dataIdFromObject })

export const client = new ApolloClient({
  link,
  cache,
  dataIdFromObject
})

export default client
