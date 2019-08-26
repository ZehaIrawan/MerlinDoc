import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const middleWares = process.env.NODE_ENV === 'development' ? composeWithDevTools() : undefined;

const initialState = {}

const configureStore = () => createStore(rootReducer,initialState, middleWares);

export default configureStore;