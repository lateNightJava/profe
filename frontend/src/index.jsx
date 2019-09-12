import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';
import { App } from './components/App';
import './index.scss';

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App compiler="TYPESCRIPT" framework="REACT" />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});
