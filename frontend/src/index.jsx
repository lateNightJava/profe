import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <App compiler="TYPESCRIPT" framework="REACT" />,
    document.getElementById('root')
  );
});
