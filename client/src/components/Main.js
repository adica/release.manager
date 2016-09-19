//require('normalize.css/normalize.css');
//require('styles/App.css');


import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './AppBar.js';
import Search from './Search.js';



class AppComponent extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render() {
    return (
    	<div>
    		<AppBar />
    		<Search />
    		
    	</div>
    	
    	
    );
  }
}

AppComponent.defaultProps = {
};

AppComponent.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default AppComponent;
