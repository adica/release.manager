import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/Main';
import AppBar from './components/AppBar';
import DeployComponent from './components/DeployComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));
const NotFound = () => <h1>404.. This page is not found!</h1>

ReactDOM.render((
    <Router history={hashHistory}>
    	<Route path="/" component={Container}>
    		<IndexRoute component={App} />
        	<Route path="/app" component={App} />
        	<Route path="/deploy/:name" component={DeployComponent} />
        	<Route path='*' component={NotFound} />
        </Route>
    </Router>
), document.getElementById('app'));


const Container = (props) => <div>
  <AppBar />
  {props.children}
</div>


