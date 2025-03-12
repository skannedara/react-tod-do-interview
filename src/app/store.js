import { createStore, combineReducers } from 'redux';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.todo] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
    case 'MARK_TODO_COMPLETED':
      return { ...state, todos: state.todos.map(todo => todo.id === action.id ? { ...todo, completed: true } : todo) };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ todoReducer });

const store = createStore(rootReducer);

export default store;