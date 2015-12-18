import React from 'react';

export default class Note extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      editing: false,
      deleting: false 
    }

  }
  render (){
    if (this.state.deleting){
      return this.renderDeleteConfirm();
    } else if(this.state.editing){
      return this.renderEdit();
    } else {
      return this.renderNote();
    }
  }
  renderEdit = () => {
    return (
      <input type="text"
             autoFocus={true}
             defaultValue={this.props.task}
             onBlur={this.finishEdit}
             onKeyPress={this.checkEnter} />
    );
  }
  renderNote = () => {
    return (
      <div onClick={this.edit}>
        <span className="task">{this.props.task}</span>
        {this.props.onDelete ? this.renderDelete() : null }
      </div>
    );
  }
  renderDelete = () => {
    return (
      <button className="delete" onClick = {this.deleting}>x</button>
    );
  }
  renderDeleteConfirm = () => {
    return (
      <div>
        <button className="deleteConfirm" onClick={this.props.onDelete}>Yes</button>
        <button className="deleteReject" onClick={this.deletingReject}>No</button>
      </div>
    );
  }
  edit = () => {
    this.setState({
      editing: true
    });
  }
  deleting = () => {
    this.setState({
      deleting: true 
    });
  }
  deletingReject = () => {
    this.setState({
      editing: false,
      deleting: false
    });
  }
  checkEnter = (e) => {
    if(e.key === 'Enter'){
      this.finishEdit(e);
    }
  }
  finishEdit = (e) => {
    this.props.onEdit(e.target.value);

    this.setState({
      editing: false
    });
  }
}
