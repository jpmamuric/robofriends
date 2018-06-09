import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
