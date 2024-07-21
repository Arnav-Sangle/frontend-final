import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/store';
import { BrowserRouter } from 'react-router-dom'

import { thunk } from 'redux-thunk'
import { applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const appStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// const appStore= createStore(
//   rootReducer,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </Provider>
);


reportWebVitals();
