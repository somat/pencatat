import React from 'react';

class NoteList extends React.Component {

  render() {
    return (
      <div className="list">
        {this.props.articles.map((article, index) => {
          return <div key={index}><p>{article}</p><hr/></div>
        })}
      </div>
    )
  }
}

export default NoteList;
