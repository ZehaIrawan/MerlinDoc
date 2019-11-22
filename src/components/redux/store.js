import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';

const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('search', serializedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('search');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const middleWares =
  process.env.NODE_ENV === 'development' ? composeWithDevTools() : undefined;

const initialState = {};

const store = createStore(rootReducer, persistedState, middleWares);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
