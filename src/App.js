import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Notes from 'views/Notes/Notes'
import Login from 'views/Auth/Login'
import Register from 'views/Auth/Register'
import NoteView from 'views/Notes/NoteView'
import NoteEdit from 'views/Notes/NoteEdit'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={ Notes } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path='/view/:id' component={ NoteView } />
        <Route path='/edit/:id' component={ NoteEdit } />
      </Router>
    )
  }
}

export default App;
