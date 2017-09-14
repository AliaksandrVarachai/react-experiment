import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

// const
//   SHOW_ALL = 'show_all',
//   SHOW_COMPLETED = 'show_completed',
//   show_ACTIVE = 'show_active';

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  // state = { filter: SHOW_ALL }

  // handleClearCompleted = () => {
  //   this.props.actions.clearCompleted();
  // }

  render() {
    const { todos, actions } = this.props;

    const completedCount = todos.reduce(
      (count, todo) => todo.completed ? count + 1 : count,
      0
    );

    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
          ))}
        </ul>
      </section>
    )
  }
}
