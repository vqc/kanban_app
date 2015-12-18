import uuid from 'node-uuid'
import React from 'react';
import Notes from './Notes.jsx';


export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      notes: [
        {
         id: uuid.v4(),
         task: 'Learn Webpack',
        },
        {
         id: uuid.v4(),
         task: 'Learn React',
        },
        {
         id: uuid.v4(),
         task: 'Eat Food',
        }
      ]
    };
  }
  render(){
    const notes = this.state.notes;
    return (
      <div>
        <button className="add-note" onClick = {this.addNote}>+</button>
        <Notes notes={notes} 
               onEdit={this.editNote}
               onDelete={this.deleteNote}/>
      </div>
    );
  }
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    });
  }
  editNote = (noteId, task) => {
    const notes = this.state.notes.map( (note) => {
      if(note.id === noteId)
        note.task = task;
      return note;
    });

    this.setState({notes: notes});
  }
  deleteNote = (noteId) => {
    const notes = this.state.notes.filter( (note) => {
      return note.id !== noteId;
    });
    this.setState({notes: notes});
  }
}
