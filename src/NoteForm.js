import React from 'react';

class NoteForm extends React.Component {
  constructor() {
    super()
    this.state = {
      article: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ article: event.target.value })
  }

  handleSubmit(event) {
    this.sendArticle()
    event.preventDefault()
  }

  sendArticle() {
    let data = {
      article: this.state.article
    }

    fetch(
      'http://localhost:3000/post',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        this.props.update()
        this.setState({article: ''})
        this.article.focus()
      })
      .catch((err) => {
        throw Error(err)
      })
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <textarea
            cols={70}
            rows={5}
            name="article"
            value={this.state.article}
            onChange={this.handleChange}
            ref={(input) => { this.article = input; }} />

          <br /><br />
          <button className="btn">Kirim</button>
        </form>
        <br />
        <hr />
      </div>
    )
  }
}

export default NoteForm;
