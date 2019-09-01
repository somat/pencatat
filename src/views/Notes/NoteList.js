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
                  <Link to={"/view/" + article.id}>View</Link> <span />
                  <Link to={"/edit/" + article.id}>Edit</Link> <span />
                  <button onClick={() => this.props.onDelete(article.id)}>Delete</button>
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
