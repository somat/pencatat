import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      redirect: false
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    this.doLogin()
    event.preventDefault()
  }

  doLogin() {
    let data = {
      username: this.state.username,
      password: this.state.password
    }

    fetch(
      'http://localhost:3000/login',
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
        if (data.success) {
          this.setState({
            username: '',
            password: ''
          })

          localStorage.setItem('login@pencatat', true)
          localStorage.setItem('token@pencatat', data.token)
          this.setState({redirect: true})
        } else {
          alert('Authentication error')
        }
      })
      .catch((err) => {
        throw Error(err)
      })
  }

  render() {
    if (this.state.redirect) return <Redirect to="/" />;

    return (
      <div className="App">
        <h1 className="title">Login</h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                ref={(input) => { this.username = input; }} />
            </label>
            <br />

            <label>
              Password:
              <input
                type="password"
                name="username"
                value={this.state.password}
                onChange={this.handlePasswordChange} />
            </label>

            <br /><br />
            <button className="btn">Login</button>
          </form>
        </div>

      </div>
    )
  }
}

export default Login;
