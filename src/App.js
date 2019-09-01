import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home'
import Login from './Login'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Router>
    )
  }
}

export default App;
