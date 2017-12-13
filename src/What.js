import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'

// import styles from './index.css'

// import App from './components/App';
import App from './redux/components/App'
import client from './app-client';
import store from './app-store'

export const What = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
)

export default What