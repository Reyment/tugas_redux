// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
