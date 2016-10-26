//require('normalize.css/normalize.css');
//require('styles/App.css');


import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './AppBar.js';
//import Search from './Search.js';
//import ApplicationSelect from './ApplicationSelect.js';
import ListItem from './ListItem.js';
import api from './../stores/api.js';

class AppComponent extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render(){
    const appList = api.apps;
    const envList = api.envs;
      return (
    	<div>
    		<AppBar />
        <ListItem listOfItems={appList} />
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
