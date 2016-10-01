//require('normalize.css/normalize.css');
//require('styles/App.css');


import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './AppBar.js';
//import Search from './Search.js';
//import ApplicationSelect from './ApplicationSelect.js';
import Selection from './Selection.js';

class AppComponent extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render(){
    const appList = [{ 'key' : 'sarine.viewer.templates.widget', 'val' : 'BASEWIDGET'},{ 'key' : 'sarine.viewer.templates.dashboard', 'val' : 'BASEDASHBOARD'}];
    const envList = [{ 'key' : 'qa4', 'val' : 'QA4'},{ 'key' : 'stg1', 'val' : 'STG'},{ 'key' : 'prod1', 'val' : 'PROD'}]
      return (
    	<div>
    		<AppBar />
        <Selection title="Choose Application" listOfItems={appList}/>
        <Selection title="Choose Environment" listOfItems={envList}/>
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
