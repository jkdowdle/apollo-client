import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'

import Users from './Users'
import Register from './Register.container'
import Profile from './Profile.container'

export const Nav = () => {
  return (
    <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <li>
        <Link to="/">Users</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
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
          <Route exact path="/" component={Users} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
