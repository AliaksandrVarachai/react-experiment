import {Component} from 'react';

export default class TodoItem extends Component {
  render() {
    //console.log(this.props.whatTodo);
    return (
      <div className="todo-item">{this.props.whatTodo}</div>
    )
  }
}
