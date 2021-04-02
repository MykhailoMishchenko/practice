import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from "./Reducer/songReducer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={createStore(reducer)}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

