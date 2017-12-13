import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
// import { ApolloProvider } from 'react-apollo'
// import { Provider } from 'react-redux'
// import {  configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'


// import { mount } from 'enzyme'

// import styles from './index.css'

// // import App from './components/App';
// import App from './redux/components/App'
// import client from './app-client';
// import store from './app-store'

import What from './What'

ReactDOM.render(
  <What />,
  document.getElementById('root')
)

registerServiceWorker()
