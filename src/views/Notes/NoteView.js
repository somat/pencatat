import React from 'react';
import { Link } from 'react-router-dom'
import { NOTES_URL } from 'views/constants'

class NoteView extends React.Component {
  constructor() {
    super()
    this.state = {
      id: "",
      name: "",
      content: "",
      last: ""
    }
  }

  componentDidMount() {
    fetch(
      NOTES_URL + "/" + this.props.match.params.id,
      { method: 'GET' })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          id: data.data.notes._id,
          name: data.data.notes.name,
          content: data.data.notes.content,
          last: data.data.notes.lastModified,
        })
      })
      .catch((err) => {
        throw Error(err)
      })
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr><td>ID</td><td>{this.state.id}</td></tr>
            <tr><td>Name</td><td>{this.state.name}</td></tr>
            <tr><td>Content</td><td>{this.state.content}</td></tr>
            <tr><td>Last Updated</td><td>{this.state.last}</td></tr>
          </tbody>
        </table>
        <br />
        <Link to="/">Kembali</Link>
      </div>
    )
  }
}

export default NoteView;
