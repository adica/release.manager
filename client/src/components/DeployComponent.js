'use strict';

import React from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './AppBar.js';
import ComponentDetails from './ComponentDetails.js';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


require('styles//Deploy.css');

class DeployComponent extends React.Component {
  
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    //const data = this.props;
    //console.log(this.props.appList.type);
    //console.log(this.props.routeParams.name);
    //const component = this.props.appList.type.filter((item)=> item.val == this.props.routeParams.name);
    //console.log(component)

    return (
    	<div>
    		<AppBar />
      		<div className="deploy-component">
        		<Card>
				    <CardMedia>
				      <img src="/images/Roundicons-54.svg" height="250" />
				    </CardMedia>
				    <CardTitle title="Base Jewerly" subtitle="Base Jewelry Component" />
				    <CardText>
				      <ComponentDetails />
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
