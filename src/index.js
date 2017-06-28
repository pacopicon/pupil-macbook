import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';
// import { BrowserRouter, matchPath, Miss } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
  return(
    <BrowserRouter>
      <Switch>
        {/* Wes Bos' code no longer working, see react-router docs: */}
        {/* <Match exactly pattern="/" component={StorePicker} /> */}
        {/* <Match pattern="/store/:storeID" component={App} /> */}
        <Route exact path="/" component={StorePicker} />
        <Route path="/store/:storeID" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));






// import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
