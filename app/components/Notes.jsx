import React from 'react';
import Note from './Note.jsx';

export default class Notes extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ul className="notes">{this.props.notes.map(this.renderNote, this)}</ul>
    );
  }
  renderNote = (note) => {
    return (
      <li className="note" key={note.id}>
        <Note task={note.task} 
              onEdit={this.props.onEdit.bind(null, note.id)}
              onDelete={this.props.onDelete.bind(null, note.id)}/>
      </li>
    );
  }
}
