import React from 'react';
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loggedin: false
    }

    this.updateList = this.updateList.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  componentDidMount() {
    this.updateList()
    if (localStorage.getItem('login@pencatat')) {
      this.setState({ loggedin: true })
    } else {
      this.setState({ loggedin: false })
    }
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

  doLogout() {
    localStorage.removeItem('login@pencatat')
    localStorage.removeItem('token@pencatat')
    this.setState({loggedin: false})
  }

  render() {

    return (
      <div className="App">
        <h1 className="title">Catatan</h1>

        {this.state.loggedin ?
          <div>
            <p>
              Anda sudah login.
              <button onClick={this.doLogout}>Logout</button>
            </p>
            <NoteForm update={this.updateList} />
          </div>
          :
          <p>
            Anda belum login.  <Link to="/login">Login</Link>
          </p>
        }

        <NoteList articles={this.state.articles} />
      </div>
    )
  }
}

export default Home;
