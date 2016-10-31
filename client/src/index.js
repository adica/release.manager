import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/Main';
import DeployComponent from './components/DeployComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/deploy" component={DeployComponent} />
    </Router>
), document.getElementById('app'));
