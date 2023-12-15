// src/redux/store.js
import { createStore } from 'redux';
import kalkulatorReducer from './reducers';

const store = createStore(kalkulatorReducer);

export default store;
