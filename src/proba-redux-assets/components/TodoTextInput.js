import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class TodoTextInput extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  };

  state = {
    text: this.props.text || ''
  };

  // handles submit end clears input for the next todo item
  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.key === 'Enter') {
      this.props.onSave(text); //saves the current state
      if (this.props.newTodo) { //clears the new state
        this.setState({ text: '' });
      }
    }
  };

  handleBlur = e => {
    alert('onblur event is triggered');
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  };

  // just local changes
  handleChange = e => {
    this.setState({ text: e.target.value })
  };

  render() {
    return (
      <input
        type="text"
        className={classnames({edit: this.props.editing, "new-todo": this.props.newTodo})}
        placeholder={this.props.placeholder}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }





}
