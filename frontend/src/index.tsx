import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { App } from './components/App';
import './index.scss';

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App compiler="TYPESCRIPT" framework="REACT" />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});
