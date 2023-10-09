import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { todosReducers } from './reducers/todosReducer';
// import { tabReducer } from './reducers/tabReducer';
import { todosReducers } from './reducer/todosReducer';
import { tabReducer } from './reducer/tabReducer';
const reducer = combineReducers({
    todos: todosReducers,
    currentab:tabReducer
})


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;