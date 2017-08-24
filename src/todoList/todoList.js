import React from 'react';

import TodoItem from '../todoItem/todoItem';

export default class TodoList extends React.Component {
  // props - object;
  render() {
    const list = this.props.list;
    return (
      list.map((item) => {
        if (item.children && item.children instanceof Array.prototype && item.children.length) {
          return (
            <TodoList list={item.children} />
          )
        }
        return (
          <TodoItem whatTodo={item.whatTodo} />
        );
      })
    )
  }
}
