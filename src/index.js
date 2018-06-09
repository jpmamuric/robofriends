import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import reducers from './redux/reducers/index';

import './index.css';
import App from './react/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(Thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
