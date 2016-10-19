//require('normalize.css/normalize.css');
//require('styles/App.css');


import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './AppBar.js';
//import Search from './Search.js';
//import ApplicationSelect from './ApplicationSelect.js';
import ListItem from './ListItem.js';

class AppComponent extends React.Component {

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }
  render(){
    const appList = [
      { 
        'key' : 'sarine.viewer.templates.widget',
        'val' : 'BASEWIDGET',
        'desc' : 'Base Widget',
        'icon' : 'Roundicons-22.svg'
      },
      { 
        'key' : 'sarine.viewer.templates.dashboard', 
        'val' : 'BASEDASHBOARD',
        'desc' : 'Base Dashboard',
        'icon' : 'Roundicons-24.svg'
      },
      { 
        'key' : 'sarine.viewer.3dfullinspection', 
        'val' : '3D-ATOM',
        'desc' : '3D Atom',
        'icon' : 'Roundicons-30.svg'
      },
      { 
        'key' : 'sarine.viewer.templates.jewelry', 
        'val' : 'BASEJEWELRY',
        'desc' : 'Base Jewelry',
        'icon' : 'Roundicons-54.svg'
      },
      { 
        'key' : 'sarine.viewer.core', 
        'val' : 'CORE',
        'desc' : 'Viewer Core',
        'icon' : 'Roundicons-55.svg'
      },
      { 
        'key' : 'sarine.viewer.templates.fullscreen', 
        'val' : 'FULLSCREEN',
        'desc' : 'Base Full Screen',
        'icon' : 'Roundicons-60.svg'
      }
   ];
    const envList = [{ 'key' : 'qa4', 'val' : 'QA4'},{ 'key' : 'stg1', 'val' : 'STG'},{ 'key' : 'prod1', 'val' : 'PROD'}]
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
