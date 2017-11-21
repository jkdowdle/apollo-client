import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'

// import App from './components/App';
import App from './redux/components/App'
import client from './app-client';
import store from './app-store'

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
