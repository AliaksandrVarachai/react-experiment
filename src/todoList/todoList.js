import React, {Component} from 'react';

import TodoItem from '../todoItem/todoItem';

class TodoList extends Component {
  /**
   * Creates a tree with todo list
   * @param props = [{whatTodo:<string>, isDone: <boolean>, {children: Array}}]
   */
  constructor(props) {
    super(props);
  }
  render() {
    const list = this.props.list;
    return (
      <div>
        {list.map((item, idx) => {
          return item.children && item.children instanceof Array && item.children.length
            ?
            <TodoItem whatTodo={item.whatTodo} isDone={item.isDone}>
              <TodoList list={item.children} />
            </TodoItem>
            :
            <TodoItem whatTodo={item.whatTodo} isDone={item.isDone} />
        })}
      </div>
    )
  }
}

export default TodoList;
