import React from 'react';
import PropTypes from 'prop-types'; //for React 16+
import { connect } from 'react-redux';

import * as TodoObjectActions from '../actions/object-actions';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

const App = ({ todos, actions }) => (
  <div className="todoapp">
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    addTodo() {return { type: TodoObjectActions.ADD_TODO }},
    deleteTodo(id) {return { type: TodoObjectActions.DELETE_TODO, id }},
    editTodo(id, text) {return { type: TodoObjectActions.EDIT_TODO, id, text }},
    completeTodo(id) {return { type: TodoObjectActions.COMPLETE_TODO, id }},
  }
});

// TODO: try annotation with connect function
export default connect(mapStateToProps, mapDispatchToProps)(App);
