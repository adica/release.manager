'use strict';

import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './AppBar.js';
import ComponentDetails from './ComponentDetails.js';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import api from './../stores/api.js';

require('styles//Deploy.css');

class DeployComponent extends React.Component {
  
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    const component = api.findAppByName(this.props.params.name)
    
    return (
    	<div>
    		<AppBar />
      		<div className="deploy-component">
        		<Card>
				    <CardMedia>
				      <img src={'/images/' + component.icon} height="250" />
				    </CardMedia>
				    <CardTitle title={component.val} subtitle={component.desc} />
				    <CardText>
				      <ComponentDetails details={component} />
				    </CardText>
				    <CardActions>
				      <RaisedButton label="Deploy Version" />
				      <RaisedButton label="Rollback" />
				    </CardActions>
				  </Card>
      		</div>
      	</div>
    );
  }
}

DeployComponent.displayName = 'DeployComponent';

// Uncomment properties you need
DeployComponent.defaultProps = {};
DeployComponent.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default DeployComponent;
