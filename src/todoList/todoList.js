import React, {Component} from 'react';

import TodoItem from '../todoItem/todoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  // props - object;
  render() {
    const list = this.props.list;
    return (
      <div>
        {list.map((item, idx) => {
          return item.children && item.children instanceof Array && item.children.length
            ?
            <TodoItem whatTodo={item.whatTodo}>
              <TodoList list={item.children} />
            </TodoItem>
            :
            <TodoItem whatTodo={item.whatTodo} />
        })}
      </div>
    )
    // {list.map((item) => {
    //   if (item.children && item.children instanceof Array.prototype && item.children.length) {
    //     return <div>hey</div>
    //     {/* <TodoList list={item.children} /> */}
    //   }
    //   return <div>hoy</div>
    //   {/*<TodoItem whatTodo={item.whatTodo} />*/}
    // }}
  }
}

export default TodoList;
