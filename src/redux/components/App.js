import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'

import Users from './Users'

export const Nav = () => {
  return (
    <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <li>
        <Link to="/">Users</Link>
      </li>
    </ul>
  )
}

export const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
