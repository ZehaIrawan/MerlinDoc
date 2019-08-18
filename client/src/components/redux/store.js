import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer'

const middleWares = process.env.NODE_ENV === 'development' ? composeWithDevTools() : undefined;

const configureStore = () => createStore(rootReducer, middleWares);

export default configureStore;