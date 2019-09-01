import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Notes from 'views/Notes/Notes'
import Login from 'views/Auth/Login'
import Register from 'views/Auth/Register'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={ Notes } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
      </Router>
    )
  }
}

export default App;
