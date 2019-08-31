import React from 'react';
import './App.css';
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }

    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    this.updateList()
  }

  updateList() {
    fetch('http://localhost:3000/post', { method: 'GET' })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ articles: data.data })
      })
      .catch((err) => {
        throw Error(err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Catatan</h1>
        <NoteForm update={this.updateList}/>
        <NoteList articles={this.state.articles} />
      </div>
    )
  }
}

export default App;
