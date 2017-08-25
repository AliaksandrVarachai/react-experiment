import React, {Component} from 'react';

export default class TodoItem extends Component {
  render() {
    //console.log(this.props.whatTodo);
    return (
      <div className="todo-item">
        <div className="what-todo">
          {this.props.whatTodo}
        </div>
        <div className="children">
          {this.props.children}
        </div>
      </div>
    )
  }
}
