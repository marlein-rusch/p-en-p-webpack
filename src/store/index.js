import { createStore, combineReducers } from 'redux';
import sessionReducer from './session/reducer';

const reducer = combineReducers({
	session: sessionReducer
});

// eslint-disable-next-line
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, enhancer);

export default store;
