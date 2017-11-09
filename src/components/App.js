import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import UsersList from './UsersList.js';
// import UsersListWithMutation from './UsersListWithMutation'
// import AddUser from './AddUser';

import Search from '../recompose/Search'
import AllUsers from '../recompose/AllUsers'
import Form from '../recompose/Form'

export const Nav = () => {
  return (
    <ul style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <li>
        <Link to="/" >Home</Link>
      </li>
      <li>
        <Link to="/search" >Search</Link>
      </li>
      <li>
        <Link to="/form" >Form</Link>
      </li>
    </ul>
  )
}

class App extends Component {
  render() {
    return <Router>
        <div className="App">
          <Nav />
          {/* <Route path="/" exact component={UsersList} /> */}
          {/* <Route path="/add-user" component={AddUser} /> */}
          <Route path="/search" component={Search} />
          <Route path="/form" component={Form} />
          <Route exact path="/" component={AllUsers} />
          {/* <Route path="/" component={UsersList} />             */}
        </div>
      </Router>;
  }
}

export default App;
