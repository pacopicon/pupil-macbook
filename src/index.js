import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';
import StorePicker from './components/StorePicker'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// ReactDom.render(...)
render(<StorePicker/>, document.querySelector('#main'));
