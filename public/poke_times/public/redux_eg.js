import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";

let initState = {
  todos: [],
  posts: []
};

// the reducer, updates the state
function myReducer(state = initState, action){
  if (action.type == 'ADD_TODO'){
    return {
      ...state,
      todos: [...state.todos, action.todo]
    }
  }
}; 

// the store
let store = createStore(myReducer);

// subscribe to changes
store.subscribe(() => {
  console.log('state updated');
  console.log(store.getState());
});

// action
const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };

store.dispatch(todoAction); // means send to reducer