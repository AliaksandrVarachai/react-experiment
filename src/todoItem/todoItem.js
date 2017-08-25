import React, {Component} from 'react';

import './todoItem.css';

export default class TodoItem extends Component {
  render() {
    const props = this.props;
    return (
      <div className="todo-item">
        <div className="what-todo-wrapper">
          <span className="link">+</span>
          <input type="checkbox" checked={props.isDone}/>
          <span className="what-todo-text">
            {props.whatTodo}
          </span>
        </div>
        <div className="children">
          {props.children}
        </div>
      </div>
    )
  }
}
