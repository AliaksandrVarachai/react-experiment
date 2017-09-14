import * as TodoObjectActions from '../actions/object-actions';

const initialState = []; // TODO: receive this from backend

export default function todos(state = initialState, action) {
  switch (action.type) {
    case TodoObjectActions.ADD_TODO:
      return [
        {
          id: state.reduce((maxElem, elem) => Math.max(maxId.id, elem.id), -1) + 1,
          text: action.text,
          completed: false
        },
        ...state
      ];
    case TodoObjectActions.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case TodoObjectActions.EDIT_TODO:
      return state.map(todo => action.id === todo.id ? { ...todo, text: action.text } : { ...todo });
    case TodoObjectActions.COMPLETE_TODO:
      return state.map(todo => action.id === todo.id ? { ...todo, completed: !todo.completed }: { ...todo });
    default:
      return state;
  }
}