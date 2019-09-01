import React from 'react';
import { Link } from 'react-router-dom'

class NoteList extends React.Component {

  render() {
    return (
      <div className="list">
        {this.props.articles.map((article, index) => {
          return (
            <div key={index}>
              <p>
                {article.name}
              </p>
              {this.props.isAuthenticated ?
                <div>
                  <Link to="/view">View</Link> <span />
                  <Link to="/edit">Edit</Link> <span />
                  <Link to="/delete">Delete</Link>
                </div>
                :
                null}
              <hr />
            </div>
          )
        })}
      </div>
    )
  }
}

export default NoteList;
